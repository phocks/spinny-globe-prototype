import * as THREE from "three/build/three.min.js";
import orbital from "three-orbit-controls";
const threeWithOrbital = THREE;

if (!threeWithOrbital.OrbitControls) {
  threeWithOrbital.OrbitControls = orbital;
}

export default threeWithOrbital;
