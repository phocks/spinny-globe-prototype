// Converts a point [longitude, latitude] in degrees to a THREE.Vector3.
import * as THREE from 'three';

export function vertex([longitude, latitude], radius: number) {
  const lambda = longitude * Math.PI / 180;
  const phi = latitude * Math.PI / 180;
  return new THREE.Vector3(
    radius * Math.cos(phi) * Math.cos(lambda),
    radius * Math.sin(phi),
    radius * Math.cos(phi) * Math.sin(lambda)
  );
}