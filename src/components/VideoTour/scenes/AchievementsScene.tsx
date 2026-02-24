/**
 * AchievementsScene.tsx  –  Scene 3
 * Achievements as a 3D constellation of glowing stars.
 */

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Line } from '@react-three/drei';
import * as THREE from 'three';

const achievements = [
  { id: 'nxp',     pos: [-4,  2,  1] as [number,number,number], color: '#f59e0b', label: 'NXP Women in Tech Scholar',          detail: 'Awarded for excellence in technology & innovation' },
  { id: 'myntra',  pos: [ 3,  2.5, -1] as [number,number,number], color: '#ec4899', label: 'Myntra HackerRamp Pre-Finalist',   detail: 'Top 0.23% nationwide — selected among 4000+ teams' },
  { id: 'pub',     pos: [-2, -1.5, 2] as [number,number,number], color: '#34d399', label: 'International Research Publication', detail: 'Published in UK academic journal' },
  { id: 'cgpa',    pos: [ 4, -1,  0] as [number,number,number], color: '#818cf8', label: '9.48 CGPA',                         detail: '10 SGPA in best semester — consistent academic excellence' },
  { id: 'top75',   pos: [ 0,  3, -2] as [number,number,number], color: '#38bdf8', label: 'Top 75 Nationwide',                  detail: 'National-level technical competition' },
  { id: 'stu',     pos: [-4, -2,  0] as [number,number,number], color: '#c084fc', label: 'Student of the Year',                detail: 'IGDTUW — recognised for all-round excellence' },
];

// Draw constellation lines between nearby stars
const constellationPairs = [[0,1],[1,4],[4,3],[3,5],[5,2],[2,0]];

const Star = ({ ach }: { ach: typeof achievements[0] }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    if (ref.current) {
      const s = 1 + Math.sin(clock.elapsedTime * 2.5 + ach.pos[0]) * 0.15;
      ref.current.scale.setScalar(hovered ? 2.0 : s);
    }
  });

  return (
    <group position={ach.pos}>
      {/* Halo */}
      <mesh>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshBasicMaterial color={ach.color} transparent opacity={hovered ? 0.25 : 0.1} />
      </mesh>

      {/* Star core */}
      <mesh
        ref={ref}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial
          color={ach.color}
          emissive={ach.color}
          emissiveIntensity={hovered ? 2 : 1}
          roughness={0}
          metalness={1}
        />
      </mesh>

      {/* Tooltip */}
      {hovered && (
        <Html center position={[0, 0.4, 0]} distanceFactor={10}>
          <div
            className="w-40 rounded-xl p-3 text-center backdrop-blur-md border pointer-events-none"
            style={{ background: '#08080fee', borderColor: ach.color + '60' }}
          >
            <div className="font-bold text-white text-[11px] mb-1 leading-snug">{ach.label}</div>
            <div className="text-[9px] leading-relaxed" style={{ color: ach.color }}>{ach.detail}</div>
          </div>
        </Html>
      )}
    </group>
  );
};

const AchievementsScene = () => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    if (groupRef.current) groupRef.current.rotation.y = clock.elapsedTime * 0.03;
  });

  return (
    <group ref={groupRef}>
      {/* Constellation lines via drei Line */}
      {constellationPairs.map(([a, b], i) => (
        <Line
          key={i}
          points={[achievements[a].pos, achievements[b].pos]}
          color="#4c1d95"
          lineWidth={1}
          transparent
          opacity={0.35}
        />
      ))}

      {achievements.map(a => <Star key={a.id} ach={a} />)}
    </group>
  );
};

export default AchievementsScene;
