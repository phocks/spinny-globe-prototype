import * as THREE from "three/build/three.min.js";
import { getLand } from "./land";
import { graticule } from "./graticule";

const land = getLand();

export const getScene = () => {
  const scene = new THREE.Scene();
  scene.add(graticule);
  scene.add(land);
  return scene;
}