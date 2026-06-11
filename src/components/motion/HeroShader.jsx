import { useEffect, useRef } from 'react'

/**
 * Three.js r128 hero backdrop — domain-warped simplex noise on a fullscreen quad.
 * OrthographicCamera + single ShaderMaterial. Clamped to 30fps on mobile (<=768px),
 * respects prefers-reduced-motion, and disposes cleanly on unmount.
 * THREE is loaded via CDN in index.html (window.THREE).
 */

const VERT = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`

const FRAG = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec3 uColorA; // deep forest
  uniform vec3 uColorB; // moss
  uniform vec3 uColorC; // bronze highlight
  uniform vec3 uColorD; // near-black floor

  // Simplex 2D — Ashima Arts (MIT)
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                       -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                    + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m; m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  // Domain-warped fbm
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
      v += a * snoise(p);
      p *= 2.02;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / max(uResolution.y, 1.0);
    vec2 p = vec2(uv.x * aspect, uv.y) * 0.55;

    float t = uTime * 0.025;
    vec2 q = vec2(fbm(p + t), fbm(p + vec2(5.2, 1.3) - t));
    vec2 r = vec2(fbm(p + 4.0 * q + vec2(1.7, 9.2) + t * 1.2),
                  fbm(p + 4.0 * q + vec2(8.3, 2.8) + t * 0.8));
    float f = fbm(p + 4.0 * r);

    // map noise to MPM palette: deep forest → moss → bronze kiss
    vec3 col = mix(uColorD, uColorA, smoothstep(-0.4, 0.25, f));
    col = mix(col, uColorB, smoothstep(0.05, 0.55, f));
    col = mix(col, uColorC, smoothstep(0.45, 0.85, length(r) * 0.55) * 0.35);

    // Vertical floor darkening for type legibility
    float floorShade = smoothstep(0.0, 0.55, uv.y);
    col *= mix(0.62, 1.0, floorShade);

    // Warm overhead light
    float light = smoothstep(0.75, 0.15, distance(vec2(uv.x, 1.0 - uv.y), vec2(0.5, 0.1)));
    col += uColorC * 0.05 * light;

    // Film grain
    float grain = fract(sin(dot(uv * uResolution, vec2(12.9898, 78.233))) * 43758.5453);
    col += (grain - 0.5) * 0.018;

    gl_FragColor = vec4(col, 1.0);
  }
`

export default function HeroShader({ className = 'hero-shader' }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const THREE = window.THREE

    if (!THREE) {
      // Graceful fallback — CSS gradient already behind; just bail.
      return
    }

    const isMobile = window.matchMedia('(max-width: 768px)').matches
    const frameBudget = isMobile ? 1000 / 30 : 1000 / 60

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: 'low-power',
    })
    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.25 : 1.75)
    renderer.setPixelRatio(dpr)
    renderer.setSize(container.clientWidth, container.clientHeight, false)
    renderer.domElement.style.position = 'absolute'
    renderer.domElement.style.inset = '0'
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    renderer.domElement.style.display = 'block'
    renderer.domElement.setAttribute('aria-hidden', 'true')
    container.appendChild(renderer.domElement)

    const uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) },
      // Palette pulled from global.css (var(--navy-deep), --navy, --navy-soft, --gold)
      uColorA: { value: new THREE.Color('#3d5242') },
      uColorB: { value: new THREE.Color('#5a6e5c') },
      uColorC: { value: new THREE.Color('#a67c52') },
      uColorD: { value: new THREE.Color('#10150f') },
    }

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: VERT,
      fragmentShader: FRAG,
    })
    const geometry = new THREE.PlaneGeometry(2, 2)
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    let raf = 0
    let last = performance.now()
    const start = last

    const tick = (now) => {
      raf = requestAnimationFrame(tick)
      const dt = now - last
      if (dt < frameBudget) return
      last = now

      if (!prefersReduced) {
        uniforms.uTime.value = (now - start) / 1000
      }
      renderer.render(scene, camera)
    }

    // Render first frame even in reduced-motion
    renderer.render(scene, camera)
    if (!prefersReduced) raf = requestAnimationFrame(tick)

    const onResize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      renderer.setSize(w, h, false)
      uniforms.uResolution.value.set(w, h)
      renderer.render(scene, camera)
    }
    window.addEventListener('resize', onResize)

    // Pause when offscreen / tab hidden
    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf)
        raf = 0
      } else if (!prefersReduced && !raf) {
        last = performance.now()
        raf = requestAnimationFrame(tick)
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} className={className} aria-hidden="true" />
}
