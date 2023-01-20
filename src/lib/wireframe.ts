import * as THREE from "three/build/three.min.js";
import * as d3 from "d3";
import { vertex } from "./vertex";

export function wireframe(multilinestring, material) {
  var geometry = new THREE.Geometry();
  multilinestring.coordinates.forEach(function (line) {
    d3.pairs(line.map(vertex), function (a, b) {
      geometry.vertices.push(a, b);
    });
  });
  return new THREE.LineSegments(geometry, material);
}
