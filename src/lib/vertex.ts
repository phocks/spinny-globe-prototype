// Converts a point [longitude, latitude] in degrees to a THREE.Vector3.
import * as THREE from 'three';

const radius = 228;

export function vertex(point) {
  var lambda = point[0] * Math.PI / 180,
      phi = point[1] * Math.PI / 180,
      cosPhi = Math.cos(phi);
  return new THREE.Vector3(
    radius * cosPhi * Math.cos(lambda),
    radius * cosPhi * Math.sin(lambda),
    radius * Math.sin(phi)
  );
}