'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function AnimatedShaderBackground() {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = divRef.current;
    if (!container) return;

    const scene    = new THREE.Scene();
    const camera   = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        iTime:       { value: 0 },
        iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      },
      vertexShader: `void main() { gl_Position = vec4(position, 1.0); }`,
      fragmentShader: `
        uniform float iTime;
        uniform vec2  iResolution;

        #define NUM_OCTAVES 3

        float rand(vec2 n) {
          return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
        }
        float noise(vec2 p) {
          vec2 ip = floor(p), u = fract(p);
          u = u * u * (3.0 - 2.0 * u);
          return mix(
            mix(rand(ip), rand(ip + vec2(1,0)), u.x),
            mix(rand(ip + vec2(0,1)), rand(ip + vec2(1,1)), u.x), u.y
          ) * mix(
            mix(rand(ip), rand(ip + vec2(1,0)), u.x),
            mix(rand(ip + vec2(0,1)), rand(ip + vec2(1,1)), u.x), u.y
          );
        }
        float fbm(vec2 x) {
          float v = 0.0, a = 0.3;
          vec2 shift = vec2(100);
          mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
          for (int i = 0; i < NUM_OCTAVES; ++i) {
            v += a * noise(x);
            x  = rot * x * 2.0 + shift;
            a *= 0.4;
          }
          return v;
        }

        void main() {
          vec2 shake = vec2(sin(iTime * 1.2) * 0.004, cos(iTime * 2.1) * 0.004);
          vec2 p = ((gl_FragCoord.xy + shake * iResolution.xy) - iResolution.xy * 0.5)
                   / iResolution.y * mat2(6.0, -4.0, 4.0, 6.0);

          float f = 2.0 + fbm(p + vec2(iTime * 5.0, 0.0)) * 0.5;
          vec4 o  = vec4(0.0);

          for (float i = 0.0; i < 35.0; i++) {
            vec2 v = p + cos(i * i + (iTime + p.x * 0.08) * 0.025 + i * vec2(13.0, 11.0)) * 3.5
                     + vec2(sin(iTime * 3.0 + i) * 0.003, cos(iTime * 3.5 - i) * 0.003);

            float tailNoise = fbm(v + vec2(iTime * 0.5, i)) * 0.3 * (1.0 - i / 35.0);

            /* Northcode palette: navy-blue + sage-teal streaks */
            vec4 col = vec4(
              0.06 + 0.20 * sin(i * 0.20 + iTime * 0.40),   // R  — low
              0.40 + 0.45 * cos(i * 0.28 + iTime * 0.50),   // G  — teal/sage
              0.62 + 0.28 * sin(i * 0.38 + iTime * 0.30),   // B  — blue
              1.0
            );

            float thin = smoothstep(0.0, 1.0, i / 35.0) * 0.6;
            o += col * exp(sin(i * i + iTime * 0.8))
                     / length(max(v, vec2(v.x * f * 0.015, v.y * 1.5)))
                     * (1.0 + tailNoise * 0.8) * thin;
          }

          /* --- BRIGHTNESS LIFT (heller als Original) --- */
          o = tanh(pow(o / 55.0, vec4(1.35)));      // was /100, 1.6
          vec3 base = vec3(0.06, 0.10, 0.18);        // soft dark-navy base (not pure black)
          gl_FragColor = vec4(base + o.rgb * 2.4, 1.0);
        }
      `,
    });

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    let frameId = 0;
    let paused  = false;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (!paused) {
        material.uniforms.iTime.value += 0.016;
        renderer.render(scene, camera);
      }
    };
    animate();

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      material.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight);
    };
    const onVisibility = () => { paused = document.hidden; };

    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      mesh.geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={divRef}
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
