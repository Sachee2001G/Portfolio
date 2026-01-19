"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const Particle = (props: any) => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += 0.002 * props.speed;
    mesh.current.rotation.y += 0.003 * props.speed;

    // Slow, gentle floating
    const t = state.clock.getElapsedTime();
    mesh.current.position.y +=
      Math.sin(t * props.factor * 0.5 + props.offset) * 0.002;
  });

  return (
    <Float speed={props.speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={mesh} position={props.position} scale={props.scale}>
        {props.shape === "sphere" ? (
          <sphereGeometry args={[1, 32, 32]} />
        ) : (
          <dodecahedronGeometry args={[1, 0]} />
        )}
        {/* Colorful but translucent material to not block content */}
        <meshPhysicalMaterial
          color={props.color}
          roughness={0.1}
          metalness={0.05}
          transmission={0.6} // More visible color, less see-through
          thickness={2}
          opacity={0.7} // Slight transparency
          transparent
          envMapIntensity={1.5}
          clearcoat={0.5}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
  );
};

const ThreeBackground = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 25, // Widened from 18 to 25
        (Math.random() - 0.5) * 20, // Widened from 18 to 20
        (Math.random() - 0.5) * 10 - 5, // Deeper range
      ] as [number, number, number],
      scale: Math.random() * 1.2 + 0.6,
      // Restoring vibrant colors
      color: [
        "#ff3b30",
        "#ff9500",
        "#ffcc00",
        "#4cd964",
        "#5ac8fa",
        "#007aff",
        "#5856d6",
        "#ff2d55",
      ][Math.floor(Math.random() * 8)],
      speed: Math.random() * 0.5 + 0.3,
      factor: Math.random() * 8,
      offset: Math.random() * 100,
      shape: Math.random() > 0.6 ? "sphere" : "dodecahedron",
    }));
  }, []);

  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-white/40 pointer-events-none">
      {/* Added a white overlay to ensure text readability if particles get too close, though z-index handles depth */}
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        {/* No background color attached, letting the CSS background show. 
            We can add a subtle gradient in the CSS parent if needed. */}
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        <Environment preset="city" />

        <group>
          {particles.map((p, i) => (
            <Particle key={i} {...p} />
          ))}
        </group>

        {/* Lighter fog to show colors better */}
        <fog attach="fog" args={["#ffffff", 8, 28]} />
      </Canvas>
      <div className="absolute inset-0 backdrop-blur-[1px] pointer-events-none" />{" "}
      {/* Glass effect overlay */}
    </div>
  );
};

export default ThreeBackground;
