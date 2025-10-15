import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function AnimatedMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  const vertexShader = `
    uniform float uTime;
    varying vec2 vUv;
    varying vec3 vPosition;
    
    void main() {
      vUv = uv;
      vPosition = position;
      
      vec3 pos = position;
      float wave = sin(pos.x * 2.0 + uTime) * 0.3;
      wave += sin(pos.y * 2.0 + uTime * 0.8) * 0.3;
      pos.z += wave;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float uTime;
    varying vec2 vUv;
    varying vec3 vPosition;
    
    void main() {
      vec2 uv = vUv;
      
      // Create animated waves
      float wave1 = sin(uv.x * 10.0 + uTime) * 0.5 + 0.5;
      float wave2 = sin(uv.y * 10.0 + uTime * 0.7) * 0.5 + 0.5;
      
      // Purple to blue gradient
      vec3 color1 = vec3(0.5, 0.2, 0.8); // Purple
      vec3 color2 = vec3(0.2, 0.4, 0.9); // Blue
      vec3 color3 = vec3(0.8, 0.3, 0.6); // Pink
      
      vec3 color = mix(color1, color2, wave1);
      color = mix(color, color3, wave2);
      
      // Add split effect
      float split = step(0.5, sin(vPosition.x * 3.0 + uTime));
      color = mix(color, color * 1.3, split * 0.3);
      
      gl_FragColor = vec4(color, 0.3);
    }
  `;

  return (
    <mesh ref={meshRef} scale={[10, 10, 2]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 },
        }}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10 opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <AnimatedMesh />
      </Canvas>
    </div>
  );
}
