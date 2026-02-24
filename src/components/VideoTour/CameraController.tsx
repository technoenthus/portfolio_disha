/**
 * CameraController.tsx
 * Smoothly lerps the R3F camera to the target position each scene change.
 */

import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface CameraControllerProps {
  targetPosition: [number, number, number];
}

const CameraController = ({ targetPosition }: CameraControllerProps) => {
  const { camera } = useThree();
  const target = useRef(new THREE.Vector3(...targetPosition));

  // Update target ref when prop changes
  target.current.set(...targetPosition);

  useFrame((_, delta) => {
    // Smooth lerp toward target
    camera.position.lerp(target.current, Math.min(1, delta * 2.5));
    camera.lookAt(0, 0, 0);
  });

  return null;
};

export default CameraController;
