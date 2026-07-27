'use client';

import { Canvas, extend, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { EffectComposer, RenderPass, UnrealBloomPass, FXAAShader, ShaderPass, SMAAPass } from '@react-three/postprocessing';
import { Suspense, useRef, useMemo } from 'react';

extend({ EffectComposer, RenderPass, UnrealBloomPass, ShaderPass, SMAAPass });

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float time;
  uniform vec2 resolution;
  varying vec2 vUv;

  #define PI 3.14159265359

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
      f.y
    );
  }

  float fbm(vec2 p, int octaves) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    for (int i = 0; i < 6; i++) {
      if (i >= octaves) break;
      value += amplitude * noise(p * frequency);
      frequency *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }

  vec3 palette(float t) {
    vec3 a = vec3(0.02, 0.05, 0.03);
    vec3 b = vec3(0.3, 0.5, 0.4);
    vec3 c = vec3(0.8, 1.2, 1.0);
    vec3 d = vec3(0.4, 0.6, 0.5);
    return a + b * cos(6.28318 * (c * t + d));
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * resolution) / min(resolution.x, resolution.y);
    
    float t = time * 0.15;
    vec2 p = uv * 3.0;
    
    float n = fbm(p + t, 4);
    float n2 = fbm(p * 2.0 - t * 0.5, 3);
    float n3 = fbm(p * 0.5 + t * 0.3, 3);
    
    float combined = n * 0.5 + n2 * 0.3 + n3 * 0.2;
    
    vec3 color = palette(combined + t * 0.2);
    
    float vignette = 1.0 - length(uv) * 0.4;
    color *= vignette * vignette;
    
    gl_FragColor = vec4(color, 1.0);
  }
`;

function BackgroundShader({ time, resolution }) {
  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          time: { value: 0 },
          resolution: { value: new THREE.Vector2() },
        }}
      />
    </mesh>
  );
}

const BackgroundShaderMaterial = (props: any) => {
  const materialRef = useRef<THREE.ShaderMaterial>();
  
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.getElapsedTime();
      materialRef.current.uniforms.resolution.value.set(
        state.gl.getDrawingBufferSize(new THREE.Vector2()).x,
        state.gl.getDrawingBufferSize(new THREE.Vector2()).y
      );
    }
  });

  return (
    <shaderMaterial
      ref={materialRef}
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      uniforms={{
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      }}
      {...props}
    />
  );
};

function HeroBackground() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.getElapsedTime();
      const size = state.gl.getDrawingBufferSize(new THREE.Vector2());
      materialRef.current.uniforms.resolution.value.set(size.x, size.y);
    }
  });

  return (
    <>
      <mesh>
        <planeGeometry args={[2, 2]} />
        <shaderMaterial
          ref={materialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{
            time: { value: 0 },
            resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
          }}
        />
      </mesh>
      
      <PointsLayer />
      <GlowOrbs />
    </>
  );
}

function PointsLayer() {
  const pointsRef = useRef<THREE.Points>(null);
  const positionsRef = useRef<Float32Array>();

  useFrame((state) => {
    if (pointsRef.current && positionsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      const time = state.clock.getElapsedTime();
      
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(time * 0.5 + i * 0.01) * 0.001;
        positions[i] += Math.cos(time * 0.3 + i * 0.01) * 0.0005;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      pointsRef.current.rotation.y = time * 0.02;
      pointsRef.current.rotation.x = time * 0.01;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const count = 800;
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const colors = new Float32Array(count * 3);
    const alphas = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const radius = 3 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      sizes[i] = Math.random() * 2 + 0.5;
      
      const colorChoice = Math.random();
      if (colorChoice < 0.4) {
        colors[i * 3] = 0.14; colors[i * 3 + 1] = 0.37; colors[i * 3 + 2] = 0.31;
      } else if (colorChoice < 0.7) {
        colors[i * 3] = 0.56; colors[i * 3 + 1] = 0.83; colors[i * 3 + 2] = 0.65;
      } else {
        colors[i * 3] = 0.91; colors[i * 3 + 1] = 0.95; colors[i * 3 + 2] = 0.93;
      }
      alphas[i] = Math.random() * 0.6 + 0.2;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.setAttribute('alpha', new THREE.BufferAttribute(alphas, 1));
    
    positionsRef.current = positions;
    return geo;
  }, []);

  const material = useMemo(() => new THREE.PointsMaterial({
    size: 0.04,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  }), []);

  return (
    <points ref={pointsRef} geometry={geometry} material={material} />
  );
}

function GlowOrbs() {
  const orbsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (orbsRef.current) {
      const time = state.clock.getElapsedTime();
      orbsRef.current.children.forEach((orb: THREE.Mesh, i) => {
        const angle = time * 0.15 + i * 2.1;
        const radius = 2.5 + i * 0.8;
        orb.position.x = Math.cos(angle) * radius;
        orb.position.z = Math.sin(angle) * radius;
        orb.position.y = Math.sin(time * 0.5 + i) * 0.5;
        orb.scale.setScalar(0.8 + Math.sin(time * 0.8 + i) * 0.2);
        orb.material.opacity = 0.15 + Math.sin(time * 0.6 + i) * 0.05;
      });
    }
  });

  return (
    <group ref={orbsRef}>
      {Array.from({ length: 4 }).map((_, i) => (
        <mesh key={i}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? '#245f4f' : '#e76f51'}
            transparent
            opacity={0.15}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

function PostProcessing() {
  return (
    <EffectComposer multisampling={4}>
      <RenderPass />
      <UnrealBloomPass
        strength={0.3}
        radius={0.6}
        threshold={0.85}
        resolution={new THREE.Vector2(window.innerWidth, window.innerHeight)}
      />
      <ShaderPass shader={FXAAShader} />
    </EffectComposer>
  );
}

export function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ 
        antialias: true, 
        alpha: true,
        preserveDrawingBuffer: true,
      }}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
    >
      <color attach="background" args={['#f5f2ea', 0]} />
      <fog attach="fog" args={['#f5f2ea', 3, 15]} />
      
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={0.4} />
      <directionalLight position={[-5, 5, -5]} intensity={0.2} />
      
      <HeroBackground />
      
      <PostProcessing />
    </Canvas>
  );
}