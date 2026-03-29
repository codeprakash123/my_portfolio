import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, PerspectiveCamera, Text, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const FloatingCube = ({ position, color }: { position: [number, number, number], color: string }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = Math.cos(t / 4) / 2;
    mesh.current.rotation.y = Math.sin(t / 4) / 2;
    mesh.current.rotation.z = Math.sin(t / 4) / 2;
    mesh.current.position.y = position[1] + Math.sin(t / 2) / 2;
  });

  return (
    <mesh position={position} ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  );
};

const Particles = ({ count = 5000 }) => {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 50;
      p[i * 3 + 1] = (Math.random() - 0.5) * 50;
      p[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return p;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#4f46e5" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const BackgroundScene = () => {
  return (
    <>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Particles />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <FloatingCube position={[-5, 2, -10]} color="#4f46e5" />
      <FloatingCube position={[5, -2, -8]} color="#06b6d4" />
      <FloatingCube position={[0, 5, -15]} color="#8b5cf6" />
      
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Sphere args={[1, 32, 32]} position={[0, 0, -5]}>
          <MeshDistortMaterial color="#4f46e5" speed={2} distort={0.4} />
        </Sphere>
      </Float>
    </>
  );
};

export const ThreeScene = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-slate-950">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <BackgroundScene />
      </Canvas>
    </div>
  );
};
