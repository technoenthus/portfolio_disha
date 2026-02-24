/**
 * JourneyScene.tsx  –  Scene 1
 * Horizontal 3D timeline with glowing milestone nodes.
 */

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

const milestones = [
  { x: -5,  year: '2019', label: 'Vice Captain',      org: 'St. Margaret School',        color: '#c084fc' },
  { x: -3,  year: '2022', label: 'Social Media Head', org: 'St. Margaret School',        color: '#a78bfa' },
  { x: -1,  year: '2024', label: 'Tech Lead (×2)',     org: 'Protege · Xenovate IGDTUW', color: '#818cf8' },
  { x:  1,  year: '2025', label: 'SDE Intern',         org: 'Amazon · Alexa Team',       color: '#f59e0b' },
  { x:  3,  year: '2025', label: 'DSA Cohort Lead',    org: 'CodessCafe',                color: '#34d399' },
  { x:  5,  year: '2026', label: 'SWE Intern',         org: 'Microsoft',                 color: '#38bdf8' },
];

// Pulsing node sphere
const MilestoneNode = ({ milestone }: { milestone: typeof milestones[0] }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    if (ref.current) {
      const s = 1 + Math.sin(clock.elapsedTime * 2 + milestone.x) * 0.08;
      ref.current.scale.setScalar(hovered ? 1.4 : s);
    }
  });

  return (
    <group position={[milestone.x, 0, 0]}>
      {/* Glow halo */}
      <mesh>
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshBasicMaterial color={milestone.color} transparent opacity={0.15} />
      </mesh>

      {/* Core sphere */}
      <Sphere
        ref={ref}
        args={[0.14, 32, 32]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial
          color={milestone.color}
          emissive={milestone.color}
          emissiveIntensity={hovered ? 1.2 : 0.6}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>

      {/* Vertical connector line */}
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.005, 0.005, 1.0, 4]} />
        <meshBasicMaterial color={milestone.color} transparent opacity={0.4} />
      </mesh>

      {/* Year label above */}
      <Html position={[0, 1.25, 0]} center distanceFactor={10}>
        <div className="pointer-events-none text-center">
          <div
            className="text-xs font-bold font-mono tracking-widest px-2 py-0.5 rounded-full border"
            style={{ color: milestone.color, borderColor: milestone.color + '60', background: '#0a0a14' }}
          >
            {milestone.year}
          </div>
          <div className="text-white text-[11px] font-semibold mt-1 whitespace-nowrap">{milestone.label}</div>
          <div className="text-gray-400 text-[9px] mt-0.5 whitespace-nowrap">{milestone.org}</div>
        </div>
      </Html>
    </group>
  );
};

const JourneyScene = () => {
  const lineRef = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    if (lineRef.current) {
      lineRef.current.position.y = Math.sin(clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <group ref={lineRef}>
      {/* Timeline baseline via drei Line */}
      <Line
        points={[[-6, 0, 0], [6, 0, 0]]}
        color="#4c1d95"
        lineWidth={1.5}
        transparent
        opacity={0.8}
      />

      {/* Glowing overlay line — rotation goes on mesh, not geometry */}
      <mesh position={[0, 0, 0]} rotation-z={Math.PI / 2}>
        <cylinderGeometry args={[0.008, 0.008, 12, 4]} />
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.5} />
      </mesh>

      {/* Milestone nodes */}
      {milestones.map(m => (
        <MilestoneNode key={m.year + m.label} milestone={m} />
      ))}
    </group>
  );
};

export default JourneyScene;
