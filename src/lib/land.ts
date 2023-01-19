import * as THREE from "three/build/three.min.js";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import land50m from "../data/land-50m.json";
console.log(land50m)
import { wireframe } from "./wireframe";

export function getLand() {
  const topology = land50m;
  const mesh = wireframe(topojson.mesh(topology, topology.objects.land));
  return new THREE.LineSegments(
    mesh,
    new THREE.LineBasicMaterial({ color: 0xff0000 })
  );
}
