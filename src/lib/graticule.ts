import { wireframe } from "./wireframe";
import { graticule10 } from "./graticule10";
import * as THREE from "three/build/three.min.js";

export const graticule = () => {
  const mesh = wireframe(graticule10());
  return new THREE.LineSegments(
    mesh,
    new THREE.LineBasicMaterial({ color: 0xaaaaaa })
  );
};
