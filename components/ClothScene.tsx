"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const vert = /* glsl */ `
uniform float uTime; uniform vec2 uMouse; uniform float uScroll;
varying vec2 vUv; varying vec3 vN;
float H(vec2 p){
  float w1 = sin(p.x*0.9 + uTime*0.45) * 0.55;
  float w2 = sin(p.y*1.4 - uTime*0.35 + p.x*0.5) * 0.35;
  float w3 = sin((p.x+p.y)*2.1 + uTime*0.7) * 0.12;
  float d = distance(p, uMouse*vec2(7.0,4.5));
  float ripple = exp(-d*0.55) * sin(d*3.2 - uTime*3.2) * 0.38;
  return (w1 + w2 + w3 + ripple) * (1.0 + uScroll*0.8);
}
void main(){
  vUv = uv; vec3 p = position;
  float e = 0.03;
  float h = H(p.xy);
  float hx = H(p.xy + vec2(e,0.0));
  float hy = H(p.xy + vec2(0.0,e));
  vec3 n = normalize(vec3(-(hx-h)/e, -(hy-h)/e, 1.0));
  vN = normalize(normalMatrix * n);
  p.z += h;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p,1.0);
}`;
const frag = /* glsl */ `
precision highp float;
varying vec2 vUv; varying vec3 vN;
void main(){
  vec3 n = normalize(vN);
  if(!gl_FrontFacing) n = -n;
  vec3 L = normalize(vec3(-0.5, 0.7, 0.8));
  vec3 V = vec3(0.0,0.0,1.0);
  float diff = dot(n,L)*0.5+0.5;
  vec3 H2 = normalize(L+V);
  float spec = pow(max(dot(n,H2),0.0), 38.0);
  float fres = pow(1.0 - max(dot(n,V),0.0), 3.0);
  vec3 deep = vec3(0.07,0.04,0.02);
  vec3 bronze = vec3(0.42,0.27,0.10);
  vec3 gold = vec3(0.74,0.54,0.22);
  vec3 light = vec3(0.95,0.84,0.55);
  vec3 col = mix(deep, bronze, smoothstep(0.35,0.8,diff));
  col = mix(col, gold, smoothstep(0.8,1.0,diff)*0.8);
  col *= 0.62;
  col += light * spec * 0.5 + gold * fres * 0.18;
  float wv = sin(vUv.x*900.0)*sin(vUv.y*600.0);
  col *= 0.95 + 0.05*wv;
  float e = smoothstep(0.0,0.18,vUv.x)*smoothstep(1.0,0.82,vUv.x)*smoothstep(0.0,0.2,vUv.y)*smoothstep(1.0,0.8,vUv.y);
  gl_FragColor = vec4(col, e);
}`;

function Cloth({ low }: { low: boolean }) {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const mesh = useRef<THREE.Mesh>(null);
  const uniforms = useMemo(() => ({ uTime: { value: 0 }, uMouse: { value: new THREE.Vector2() }, uScroll: { value: 0 } }), []);
  const reduce = useMemo(() => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, []);
  useFrame((s, dt) => {
    if (!mat.current) return;
    uniforms.uTime.value += dt * (reduce ? 0.2 : 1);
    uniforms.uMouse.value.lerp(s.pointer, 0.06);
    const sc = Math.min(window.scrollY / window.innerHeight, 1.5);
    uniforms.uScroll.value = sc;
    if (mesh.current) { mesh.current.rotation.z = 0.28 + sc * 0.15; mesh.current.position.y = -0.4 + sc * 1.2; }
  });
  const seg: [number, number] = low ? [70, 44] : [170, 106];
  return (
    <mesh ref={mesh} rotation={[-0.95, 0, 0.28]} position={[2.2, -0.9, 0]}>
      <planeGeometry args={[17, 11, seg[0], seg[1]]} />
      <shaderMaterial ref={mat} vertexShader={vert} fragmentShader={frag} uniforms={uniforms} transparent side={THREE.DoubleSide} />
    </mesh>
  );
}

function Threads({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);
  const { pos, spd } = useMemo(() => {
    const pos = new Float32Array(count * 3), spd = new Float32Array(count);
    for (let i = 0; i < count; i++) { pos[i*3] = (Math.random()-0.5)*16; pos[i*3+1] = (Math.random()-0.5)*9; pos[i*3+2] = Math.random()*3 - 0.5; spd[i] = 0.1 + Math.random()*0.35; }
    return { pos, spd };
  }, [count]);
  useFrame((_, dt) => {
    const g = ref.current?.geometry.attributes.position as THREE.BufferAttribute | undefined; if (!g) return;
    for (let i = 0; i < count; i++) { let y = g.getY(i) + spd[i]*dt; if (y > 4.8) y = -4.8; g.setY(i, y); g.setX(i, g.getX(i) + Math.sin(y*1.3+i)*dt*0.08); }
    g.needsUpdate = true;
  });
  return (
    <points ref={ref}>
      <bufferGeometry><bufferAttribute attach="attributes-position" args={[pos, 3]} /></bufferGeometry>
      <pointsMaterial color="#E3C27E" size={0.045} transparent opacity={0.75} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
}

export default function ClothScene({ active = true }: { active?: boolean }) {
  const low = typeof window !== "undefined" && (window.innerWidth < 768 || (navigator.hardwareConcurrency ?? 8) <= 4);
  return (
    <Canvas frameloop={active ? "always" : "never"} dpr={[1, low ? 1.4 : 1.8]} camera={{ position: [0, 0, 6.5], fov: 50 }} gl={{ antialias: !low, alpha: true, powerPreference: "high-performance" }} style={{ position: "absolute", inset: 0 }}>
      <Cloth low={low} />
      <Threads count={low ? 90 : 240} />
    </Canvas>
  );
}
