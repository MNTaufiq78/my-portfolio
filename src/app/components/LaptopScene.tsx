"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment, Html } from "@react-three/drei";
import * as THREE from "three";

// Scroll progress hook
const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const rawProgress = Math.min(1, Math.max(0, scrollY / maxScroll));
      setProgress(rawProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
};

// Linear interpolation helper
const lerp = (start: number, end: number, t: number) => {
  return start * (1 - t) + end * t;
};

// The 3D Model Component
function LaptopModel({ progress }: { progress: number }) {
  const { scene } = useGLTF("/models/asus_rog_zephyrus_duo_gx551qm.glb"); // Update path
  const modelRef = useRef<THREE.Group>(null);
  const { camera } = useThree();
  
  // Calculate target rotation and position based on scroll progress
  const targetState = useMemo(() => {
    // Stage 1: 0% - 33% -> Front view (welcome angle)
    if (progress < 0.33) {
      const t = progress / 0.33; // 0 to 1
      return {
        rotationY: lerp(0, 0.5, t),      // 0 to ~30 degrees
        rotationX: lerp(0.2, 0.1, t),    // slight tilt
        positionZ: lerp(0, -0.5, t),
        positionY: lerp(0, 0.2, t),
      };
    }
    // Stage 2: 33% - 66% -> Top-down angled view (keyboard detail)
    else if (progress < 0.66) {
      const t = (progress - 0.33) / 0.33;
      return {
        rotationY: lerp(0.5, 2.8, t),     // 30 to ~160 degrees
        rotationX: lerp(0.1, 0.4, t),     // tilt up to show keyboard
        positionZ: lerp(-0.5, -1.2, t),
        positionY: lerp(0.2, 0.5, t),
      };
    }
    // Stage 3: 66% - 100% -> Rear view + zoom in
    else {
      const t = (progress - 0.66) / 0.34;
      return {
        rotationY: lerp(2.8, Math.PI, t), // to 180 degrees (back view)
        rotationX: lerp(0.4, 0.15, t),    // level out
        positionZ: lerp(-1.2, -0.3, t),   // zoom closer to screen
        positionY: lerp(0.5, 0.1, t),
      };
    }
  }, [progress]);

  // Animate model smoothly
  useFrame(() => {
    if (modelRef.current && targetState) {
      modelRef.current.rotation.y = lerp(
        modelRef.current.rotation.y,
        targetState.rotationY,
        0.1
      );
      modelRef.current.rotation.x = lerp(
        modelRef.current.rotation.x,
        targetState.rotationX,
        0.1
      );
      modelRef.current.position.z = lerp(
        modelRef.current.position.z,
        targetState.positionZ,
        0.1
      );
      modelRef.current.position.y = lerp(
        modelRef.current.position.y,
        targetState.positionY,
        0.1
      );
    }
  });

  // Auto-zoom camera on final stage
  useFrame(() => {
    if (progress > 0.85) {
      const t = (progress - 0.85) / 0.15;
      camera.position.z = lerp(5, 3.5, Math.min(1, t));
    } else {
      camera.position.z = lerp(camera.position.z, 5, 0.05);
    }
  });

  return (
    <group ref={modelRef} position={[0, 0, 0]} scale={1.2}>
      <primitive object={scene} />
      {/* Optional: Add a glowing screen effect */}
      <pointLight position={[2, 3, 4]} intensity={0.5} color="#00ffcc" />
    </group>
  );
}

// Loading fallback
function Loader() {
  return (
    <Html center>
      <div className="text-cyan-400 text-lg animate-pulse">Loading 3D Model...</div>
    </Html>
  );
}

// Main Scene Component
export default function LaptopScene() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0">
      <Canvas
        camera={{ position: [0, 1, 5], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, 3, 2]} intensity={0.5} color="#00ffcc" />
        <Environment preset="city" />
        
        <LaptopModel progress={progress} />
        
        {/* Subtle orbit controls disabled for scroll - but you can enable for debugging */}
        {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
      </Canvas>
    </div>
  );
}