/**
 * PersonalityScene.tsx  –  Scene 4
 * Split-world 3D effect: code terminal left / world-map inspired right.
 */

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

// Floating code fragments on the left side
const CODE_SNIPPETS = [
  'const solve = (problem) => {',
  '  // always figure it out',
  '  return buildSolution();',
  '};',
  'while (curious) {',
  '  learn();',
  '  build();',
  '}',
];

const CodeFragment = ({ text, position }: { text: string; position: [number, number, number] }) => (
  <Html position={position} distanceFactor={14}>
    <div className="text-green-400/60 font-mono text-[10px] whitespace-nowrap pointer-events-none select-none">
      {text}
    </div>
  </Html>
);

// Floating geo shapes on the right (world/defence theme)
const GeoShape = ({ color, pos, speed, shape }: {
  color: string; pos: [number, number, number]; speed: number; shape: 'oct' | 'ico' | 'torus'
}) => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.elapsedTime * speed * 0.7;
      ref.current.rotation.y = clock.elapsedTime * speed;
    }
  });

  const geo = shape === 'oct'
    ? <octahedronGeometry args={[0.3, 0]} />
    : shape === 'ico'
    ? <icosahedronGeometry args={[0.28, 0]} />
    : <torusGeometry args={[0.25, 0.07, 8, 20]} />;

  return (
    <mesh ref={ref} position={pos}>
      {geo}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        wireframe={shape === 'ico'}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
};

const PersonalityScene = () => {
  const dividerRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    if (dividerRef.current) {
      dividerRef.current.position.y = Math.sin(clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <group>
      {/* Vertical glowing divider */}
      <mesh ref={dividerRef}>
        <planeGeometry args={[0.015, 6]} />
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.7} />
      </mesh>
      <mesh>
        <planeGeometry args={[0.1, 6]} />
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.08} />
      </mesh>

      {/* Left – Code side */}
      {CODE_SNIPPETS.map((text, i) => (
        <CodeFragment
          key={text}
          text={text}
          position={[-2, 1.5 - i * 0.42, 0]}
        />
      ))}

      {/* Left background plane */}
      <mesh position={[-2.5, 0, -0.5]}>
        <planeGeometry args={[4.5, 5]} />
        <meshBasicMaterial color="#052e16" transparent opacity={0.18} />
      </mesh>

      {/* Right – Geo / defence / world side */}
      <GeoShape color="#38bdf8" pos={[2.5, 1.2, 0]}  speed={0.4} shape="oct" />
      <GeoShape color="#818cf8" pos={[1.8, -0.8, 0]} speed={0.6} shape="ico" />
      <GeoShape color="#f59e0b" pos={[3.2, -0.2, 0]} speed={0.3} shape="torus" />

      {/* Right background plane */}
      <mesh position={[2.5, 0, -0.5]}>
        <planeGeometry args={[4.5, 5]} />
        <meshBasicMaterial color="#0c1a3a" transparent opacity={0.18} />
      </mesh>

      {/* Labels */}
      <Html position={[-2.5, 2.3, 0]} center distanceFactor={12}>
        <div className="text-green-400 text-xs font-mono font-bold tracking-widest pointer-events-none">
          CODE SIDE
        </div>
      </Html>
      <Html position={[2.5, 2.3, 0]} center distanceFactor={12}>
        <div className="text-blue-400 text-xs font-mono font-bold tracking-widest pointer-events-none">
          CURIOSITY SIDE
        </div>
      </Html>
    </group>
  );
};

export default PersonalityScene;
