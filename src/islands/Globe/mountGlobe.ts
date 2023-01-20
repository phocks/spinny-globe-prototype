import * as THREE from "three/build/three.min.js";
import * as topojson from "topojson-client";

// D3 modules
import * as d3Array from "d3-array";
import * as d3Collection from "d3-collection";
import * as d3Timer from "d3-timer";
import * as d3Request from "d3-request";
import * as d3Dispatch from "d3-dispatch";

const d3 = {
  ...d3Array,
  ...d3Collection,
  ...d3Timer,
  ...d3Request,
  ...d3Dispatch
};

// Local
import { wireframe, vertex } from "./lib/wireframe.js";
import { graticule10 } from "./lib/graticule10.js";

// Data
import landTopology from "./data/land-50m.json";

const radius = 100;
const width = 600;
const height = 600;

const camera = getCamera();
const graticule = getGraticule();

function getCamera() {
  const fov = 60;
  const aspect = width / height;
  const near = 1;
  const far = 1000;
  return new THREE.PerspectiveCamera(fov, aspect, near, far);
}

function getLandWireframe(topology) {
  const mesh = topojson.mesh(topology, topology.objects.land);
  return wireframe(
    mesh,
    radius,
    new THREE.LineBasicMaterial({ color: "hsla(223, 17%, 66%, 1)" })
  );
}

function getGraticule() {
  const mesh = graticule10();
  return wireframe(
    mesh,
    radius,
    new THREE.LineBasicMaterial({ color: "hsla(205, 6%, 87%, 1)" })
  );
}

function getSphere() {
  const geometry = new THREE.SphereGeometry(radius - 0.001, 32, 32);
  const material = new THREE.MeshBasicMaterial({ color: "white" });
  return new THREE.Mesh(geometry, material);
}

const main = ({ mountName }: { mountName: string }) => {
  const land = getLandWireframe(landTopology);
  const sphere = getSphere();
  const scene = getScene();

  function getScene() {
    const scene = new THREE.Scene();
    scene.add(sphere);
    scene.add(graticule);
    scene.add(land);
    return scene;
  }

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setClearColor(0x000000, 0); // default
  renderer.setSize(width, height);
  renderer.setPixelRatio(devicePixelRatio);

  const mount = document.querySelector("." + mountName);
  mount.appendChild(renderer.domElement);

  // Spin the globe
  d3.timer(function (t) {
    const { x, y, z } = vertex([-t / 100, Math.sin(t / 5000) * 45], radius * 2.2);
    camera.position.x = x;
    camera.position.y = y;
    camera.position.z = z;
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
  });
};

export default main;
