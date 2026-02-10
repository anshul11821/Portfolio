"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere({ mouse }) {
  const mesh = useRef();
  
  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      mesh.current.rotation.x = clock.getElapsedTime() * 0.2 + mouse.current[1] * 0.2;
      mesh.current.rotation.y = clock.getElapsedTime() * 0.3 + mouse.current[0] * 0.2;
      
      // Subtle parallax position
      mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, mouse.current[0] * 0.5, 0.1);
      mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y, mouse.current[1] * 0.5, 0.1);
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={1.5} floatIntensity={2.3}>
      <mesh ref={mesh}>
        <Sphere args={[1, 100, 100]} scale={2.4}>
          <MeshDistortMaterial
            color="#00d4ff"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </mesh>
    </Float>
  );
}

function Particles({ count = 2000, mouse }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 25;
      p[i * 3 + 1] = (Math.random() - 0.5) * 25;
      p[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }
    return p;
  }, [count]);

  const pointsRef = useRef();

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = THREE.MathUtils.lerp(pointsRef.current.rotation.y, state.clock.getElapsedTime() * 0.05 + mouse.current[0] * 0.1, 0.05);
      pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, state.clock.getElapsedTime() * 0.02 + mouse.current[1] * 0.1, 0.05);
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#7b61ff"
        sizeTunnel={true}
        transparent
        opacity={0.4}
      />
    </points>
  );
}

export default function HeroScene() {
  const mouse = useRef([0, 0]);

  return (
    <div 
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}
      onMouseMove={(e) => {
        mouse.current = [
          (e.clientX / window.innerWidth) * 2 - 1,
          -(e.clientY / window.innerHeight) * 2 + 1,
        ];
      }}
    >
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7b61ff" />
        <spotLight position={[0, 5, 0]} intensity={1} color="#ffffff" />
        
        <AnimatedSphere mouse={mouse} />
        <Particles mouse={mouse} />
      </Canvas>
    </div>
  );
}
