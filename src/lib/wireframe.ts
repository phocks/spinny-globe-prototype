import * as THREE from "three/build/three.min.js";
import * as d3 from "d3";
import { vertex } from "./vertex";



const radius = 100;

export function wireframe(multilinestring) {
  const geometry = new THREE.Geometry();
  multilinestring.coordinates.forEach((line) => {
    d3.pairs(
      line.map((p) => vertex(p, radius)),
      (a, b) => {
        return geometry.vertices.push(a, b);
      }
    );
  });
  return geometry;
}
