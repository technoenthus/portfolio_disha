/**
 * ProjectsScene.tsx  –  Scene 2
 * 4 floating project orbs in orbit. Click to surface details.
 */

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const projects = [
  {
    id: 'cooig',
    label: 'Cooig',
    theme: 'Social Platform',
    desc: 'A social networking platform with real-time features and content discovery.',
    color: '#f472b6',
    pos: [-3, 1.5, 0] as [number, number, number],
    orbitRadius: 3,
    orbitSpeed: 0.25,
    orbitOffset: 0,
  },
  {
    id: 'yuvakhel',
    label: 'YuvaKhel',
    theme: 'AI + Sports',
    desc: 'AI-powered sports talent discovery platform for youth athletes.',
    color: '#34d399',
    pos: [3, 1.5, 0] as [number, number, number],
    orbitRadius: 3,
    orbitSpeed: 0.2,
    orbitOffset: Math.PI / 2,
  },
  {
    id: 'everybite',
    label: 'Everybite',
    theme: 'AI Food Scanner',
    desc: 'Scan any food item and get instant nutritional insights using CV + AI.',
    color: '#fb923c',
    pos: [-3, -1.5, 0] as [number, number, number],
    orbitRadius: 3,
    orbitSpeed: 0.22,
    orbitOffset: Math.PI,
  },
  {
    id: 'synapse',
    label: 'Synapse',
    theme: 'Neural Network',
    desc: 'Visualise and interact with neural network architectures in real-time.',
    color: '#818cf8',
    pos: [3, -1.5, 0] as [number, number, number],
    orbitRadius: 3,
    orbitSpeed: 0.18,
    orbitOffset: (3 * Math.PI) / 2,
  },
];

const ProjectOrb = ({
  project,
  isActive,
  onClick,
}: {
  project: typeof projects[0];
  isActive: boolean;
  onClick: () => void;
}) => {
  const ref = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime * project.orbitSpeed + project.orbitOffset;
    if (groupRef.current) {
      groupRef.current.position.x = Math.cos(t) * project.orbitRadius;
      groupRef.current.position.y = Math.sin(t) * 1.5;
    }
    if (ref.current) {
      ref.current.rotation.y += 0.01;
      const s = isActive ? 1.4 : 1 + Math.sin(clock.elapsedTime * 1.5 + project.orbitOffset) * 0.05;
      ref.current.scale.setScalar(s);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Glow halo */}
      <mesh>
        <sphereGeometry args={[0.55, 16, 16]} />
        <meshBasicMaterial color={project.color} transparent opacity={isActive ? 0.18 : 0.08} />
      </mesh>

      {/* Core orb */}
      <Sphere ref={ref} args={[0.38, 64, 64]} onClick={onClick}>
        <meshStandardMaterial
          color={project.color}
          emissive={project.color}
          emissiveIntensity={isActive ? 1.0 : 0.5}
          roughness={0.05}
          metalness={0.9}
          wireframe={project.id === 'synapse'}
        />
      </Sphere>

      {/* Label */}
      <Html center position={[0, -0.65, 0]} distanceFactor={12}>
        <div
          className="text-center pointer-events-none whitespace-nowrap"
          style={{ color: project.color }}
        >
          <div className="text-xs font-bold tracking-wider">{project.label}</div>
          <div className="text-[9px] text-white/50 mt-0.5">{project.theme}</div>
        </div>
      </Html>

      {/* Expanded detail card */}
      {isActive && (
        <Html center position={[0, 1.1, 0]} distanceFactor={8}>
          <div
            className="w-44 rounded-xl p-3 text-center pointer-events-none backdrop-blur-md border"
            style={{ background: '#0a0a14ee', borderColor: project.color + '50' }}
          >
            <div className="font-bold text-white text-xs mb-1">{project.label}</div>
            <div className="text-[9px] text-white/60 leading-relaxed">{project.desc}</div>
          </div>
        </Html>
      )}
    </group>
  );
};

interface ProjectsSceneProps {
  onNext: () => void;
}

const ProjectsScene = ({ onNext: _ }: ProjectsSceneProps) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <group>
      {/* Central core */}
      <mesh>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial
          color="#7c3aed"
          emissive="#7c3aed"
          emissiveIntensity={1.5}
          roughness={0}
          metalness={1}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshBasicMaterial color="#6d28d9" transparent opacity={0.12} />
      </mesh>

      {projects.map(p => (
        <ProjectOrb
          key={p.id}
          project={p}
          isActive={active === p.id}
          onClick={() => setActive(active === p.id ? null : p.id)}
        />
      ))}
    </group>
  );
};

export default ProjectsScene;
