"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Particles() {
  const pointsRef = useRef(null);
  const count = 120;
  
  // Use state initializer to generate particle positions once.
  // This avoids accessing refs during render.
  const [positions] = useState(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      arr[i] = (Math.random() - 0.5) * 15;     // X
      arr[i + 1] = (Math.random() - 0.5) * 15; // Y
      arr[i + 2] = (Math.random() - 0.5) * 10 - 2; // Z
    }
    return arr;
  });

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.012;
    pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.006;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#FB64B6" /* Pink particles to match theme */
        sizeAttenuation
        transparent
        opacity={0.35}
      />
    </points>
  );
}

export default function ThreeBg() {
  return (
    <div className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} gl={{ alpha: true, antialias: false }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  );
}
