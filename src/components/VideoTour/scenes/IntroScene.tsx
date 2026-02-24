/**
 * IntroScene.tsx  –  Scene 0
 * Galaxy particles, floating name text, subtle drift.
 */

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';
import * as THREE from 'three';

// Randomised particle field
const ParticleDrift = () => {
  const ref = useRef<THREE.Points>(null!);
  const count = 300;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) positions[i] = (Math.random() - 0.5) * 20;

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.04;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#a78bfa" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
};

const IntroScene = () => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(clock.elapsedTime * 0.4) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <ParticleDrift />

      {/* Main name */}
      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.4}>
        <Text
          fontSize={0.7}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          position={[0, 0.6, 0]}
          font="https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2"
          outlineWidth={0.01}
          outlineColor="#8b5cf6"
        >
          Disha Malhotra
        </Text>
      </Float>

      {/* Glowing ring behind text */}
      <mesh position={[0, 0.6, -0.5]}>
        <ringGeometry args={[1.8, 2.0, 64]} />
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.12} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 0.6, -0.6]}>
        <ringGeometry args={[2.2, 2.5, 64]} />
        <meshBasicMaterial color="#6366f1" transparent opacity={0.07} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default IntroScene;
