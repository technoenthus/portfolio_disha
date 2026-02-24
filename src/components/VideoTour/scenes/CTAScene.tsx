/**
 * CTAScene.tsx  –  Scene 5
 * Final CTA: converging particles, glowing prompt.
 */

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const CTAScene = () => {
  const particlesRef = useRef<THREE.Points>(null!);

  const count = 500;
  const { positions, velocities: _velocities } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 4 + Math.random() * 4;
      positions[i * 3]     = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 5;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
      velocities[i * 3]     = (Math.random() - 0.5) * 0.005;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.005;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.005;
    }
    return { positions, velocities };
  }, []);

  useFrame(({ clock }) => {
    if (!particlesRef.current) return;
    const pos = particlesRef.current.geometry.attributes.position.array as Float32Array;
    const t = clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      // Drift toward center + gentle orbit
      pos[i * 3]     += (0 - pos[i * 3])     * 0.001 + Math.sin(t * 0.3 + i) * 0.003;
      pos[i * 3 + 1] += (0 - pos[i * 3 + 1]) * 0.001 + Math.cos(t * 0.4 + i) * 0.003;
      pos[i * 3 + 2] += (0 - pos[i * 3 + 2]) * 0.001;
    }
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
    particlesRef.current.rotation.y = t * 0.05;
  });

  // Spinning outer rings
  const ringRef1 = useRef<THREE.Mesh>(null!);
  const ringRef2 = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    if (ringRef1.current) ringRef1.current.rotation.z = clock.elapsedTime * 0.3;
    if (ringRef2.current) ringRef2.current.rotation.x = clock.elapsedTime * 0.2;
  });

  return (
    <group>
      {/* Converging particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.035} color="#a78bfa" transparent opacity={0.8} sizeAttenuation />
      </points>

      {/* Spinning rings */}
      <mesh ref={ringRef1}>
        <torusGeometry args={[2.2, 0.015, 4, 80]} />
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.5} />
      </mesh>
      <mesh ref={ringRef2}>
        <torusGeometry args={[3.0, 0.01, 4, 80]} />
        <meshBasicMaterial color="#6366f1" transparent opacity={0.3} />
      </mesh>

      {/* Central glow */}
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={2} roughness={0} metalness={1} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.12} />
      </mesh>
    </group>
  );
};

export default CTAScene;
