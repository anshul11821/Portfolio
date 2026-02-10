"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { skills } from "@/data/portfolio";

function SkillCloud({ skillsList }) {
  const groupRef = useRef();
  
  // Flatten skills into a single array for the cloud
  const allSkills = useMemo(() => {
    return Object.values(skillsList).flat().slice(0, 40);
  }, [skillsList]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {allSkills.map((skill, i) => {
        const phi = Math.acos(-1 + (2 * i) / allSkills.length);
        const theta = Math.sqrt(allSkills.length * Math.PI) * phi;
        const radius = 6;

        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);

        return (
          <Float key={skill} speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Text
              position={[x, y, z]}
              fontSize={0.4}
              color={i % 2 === 0 ? "#00d4ff" : "#7b61ff"}
              anchorX="center"
              anchorY="middle"
            >
              {skill}
            </Text>
          </Float>
        );
      })}
    </group>
  );
}

export default function SkillSphere() {
  return (
    <div style={{ width: "100%", height: "400px" }} data-hover="3d">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#00d4ff" />
        <SkillCloud skillsList={skills} />
      </Canvas>
    </div>
  );
}
