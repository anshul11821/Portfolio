"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, PerspectiveCamera, Tetrahedon, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

function AbstractShape() {
  const mesh = useRef();
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Icosahedron ref={mesh} args={[1, 0]} scale={2}>
        <MeshDistortMaterial
          color="#7b61ff"
          distort={0.4}
          speed={3}
          roughness={0}
          metalness={1}
          emissive="#7b61ff"
          emissiveIntensity={0.5}
        />
      </Icosahedron>
    </Float>
  );
}

export default function AboutScene() {
  return (
    <div style={{ width: "100%", height: "400px", cursor: "none" }} data-hover="3d">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00d4ff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#7b61ff" />
        <spotLight position={[0, 5, 0]} intensity={1} />
        <AbstractShape />
      </Canvas>
    </div>
  );
}
