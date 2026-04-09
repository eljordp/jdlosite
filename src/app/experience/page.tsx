"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";

/* ─────────────────────────────────────────────────────────────────────────────
   JDLO — Interactive Experience
   Full-screen WebGL canvas, scroll-driven orbital camera,
   bloom post-processing, velocity-trail particle physics.
   ───────────────────────────────────────────────────────────────────────────── */

export default function ExperiencePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    let destroyed = false;
    let rafId: number;

    gsap.registerPlugin(ScrollTrigger);

    const init = () => {

      // ── Device ──────────────────────────────────────────────────────────────
      const isMobile =
        window.innerWidth < 768 ||
        !window.matchMedia("(hover: hover) and (pointer: fine)").matches;

      // ── Lenis ───────────────────────────────────────────────────────────────
      const lenis = new Lenis({
        duration: isMobile ? 1.2 : 1.9,
        smoothWheel: true,
        touchMultiplier: 1.5,
      });
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);

      // ── Renderer ─────────────────────────────────────────────────────────────
      const canvas = canvasRef.current!;
      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: !isMobile,
        alpha: false,
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 0.9;
      renderer.outputColorSpace = THREE.SRGBColorSpace;

      // ── Scene ────────────────────────────────────────────────────────────────
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x060e1c);
      scene.fog = new THREE.FogExp2(0x060e1c, 0.001);

      // ── Camera ───────────────────────────────────────────────────────────────
      const camera = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.set(12, 2, 12);
      camera.lookAt(0, 8, 0);

      // ── Post-processing ───────────────────────────────────────────────────────
      const composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));

      const bloom = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        isMobile ? 1.0 : 2.0,
        0.65,
        0.04
      );
      composer.addPass(bloom);

      const chromaShader = {
        uniforms: {
          tDiffuse: { value: null },
          amount: { value: isMobile ? 0.0007 : 0.0016 },
        },
        vertexShader: `
          varying vec2 vUv;
          void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }
        `,
        fragmentShader: `
          uniform sampler2D tDiffuse;
          uniform float amount;
          varying vec2 vUv;
          void main() {
            vec2 dir = vUv - 0.5;
            float d = length(dir);
            vec2 off = normalize(dir + 0.0001) * amount * d * d;
            float r = texture2D(tDiffuse, vUv + off).r;
            float g = texture2D(tDiffuse, vUv).g;
            float b = texture2D(tDiffuse, vUv - off).b;
            gl_FragColor = vec4(r, g, b, 1.0);
          }
        `,
      };
      composer.addPass(new ShaderPass(chromaShader));
      composer.addPass(new OutputPass());

      // ── Lights ───────────────────────────────────────────────────────────────
      scene.add(new THREE.AmbientLight(0x0a1428, 3));
      const moon = new THREE.DirectionalLight(0x6688bb, 1.0);
      moon.position.set(-12, 30, -8);
      scene.add(moon);

      const goldA = new THREE.PointLight(0xc9a84c, 12, 50);
      goldA.position.set(5, 12, 5);
      scene.add(goldA);
      const goldB = new THREE.PointLight(0xc9a84c, 8, 40);
      goldB.position.set(-5, 28, 3);
      scene.add(goldB);
      const tealCore = new THREE.PointLight(0x4de8cc, 6, 28);
      tealCore.position.set(0, 0, 6);
      scene.add(tealCore);
      const apex = new THREE.PointLight(0xfff0cc, 18, 16);
      apex.position.set(0, 55, 0);
      scene.add(apex);
      const orbitLight = new THREE.PointLight(0x4de8cc, 2.5, 35);
      scene.add(orbitLight);

      // ── Scene wrapper (tilts with mouse) ─────────────────────────────────────
      const wrapper = new THREE.Group();
      scene.add(wrapper);

      // ── Central column — abstract light pillar ────────────────────────────────
      function buildPillar() {
        const g = new THREE.Group();
        const segments = 14;
        const goldMat = new THREE.MeshStandardMaterial({
          color: 0xc9a84c,
          metalness: 0.98,
          roughness: 0.02,
          emissive: 0x5a3a00,
          emissiveIntensity: 1.2,
        });
        const glassMat = new THREE.MeshStandardMaterial({
          color: 0x2244aa,
          metalness: 0.96,
          roughness: 0.04,
          emissive: 0x0a1e40,
          emissiveIntensity: 1.6,
        });
        // Tapering column segments
        for (let i = 0; i < segments; i++) {
          const t = i / segments;
          const r = 1.4 * (1 - t * 0.75);
          const h = 3.5;
          const y = i * h;
          const mat = i % 3 === 0 ? goldMat : glassMat;
          const m = new THREE.Mesh(
            new THREE.CylinderGeometry(r * 0.85, r, h, 6),
            mat
          );
          m.position.y = y + h / 2;
          m.rotation.y = i * 0.15;
          g.add(m);
          // Gold band every other tier
          if (i % 2 === 0) {
            const band = new THREE.Mesh(
              new THREE.CylinderGeometry(r * 1.05, r * 1.05, 0.12, 24),
              goldMat
            );
            band.position.y = y + h;
            g.add(band);
          }
        }
        // Spire
        const spire = new THREE.Mesh(
          new THREE.CylinderGeometry(0.01, 0.18, 12, 10),
          goldMat
        );
        spire.position.y = segments * 3.5 + 2;
        g.add(spire);
        // Apex orb — MeshBasic = always max bright → max bloom
        const orb = new THREE.Mesh(
          new THREE.SphereGeometry(0.2, 12, 12),
          new THREE.MeshBasicMaterial({ color: 0xfff8cc })
        );
        orb.position.y = segments * 3.5 + 14;
        g.add(orb);
        // Ground disk
        const ground = new THREE.Mesh(
          new THREE.CylinderGeometry(7, 7, 0.18, 64),
          new THREE.MeshStandardMaterial({
            color: 0x0b1520,
            roughness: 0.9,
            emissive: 0x020810,
            emissiveIntensity: 0.7,
          })
        );
        ground.position.y = -0.09;
        g.add(ground);
        wrapper.add(g);
      }

      // ── Spiral ribbons ────────────────────────────────────────────────────────
      function buildRibbons() {
        const list: THREE.Mesh[] = [];
        [
          { color: 0xc9a84c, opacity: 0.3,  turns: 2.5, radius: 3.6, thick: 0.055, speed:  0.003 },
          { color: 0x4de8cc, opacity: 0.22, turns: 2.0, radius: 5.0, thick: 0.045, speed: -0.002 },
          { color: 0xc9a84c, opacity: 0.14, turns: 3.2, radius: 6.4, thick: 0.035, speed:  0.0015 },
          { color: 0x88bbff, opacity: 0.1,  turns: 1.5, radius: 4.4, thick: 0.04,  speed: -0.004 },
        ].forEach((cfg) => {
          const pts = [];
          const totalH = 56;
          for (let i = 0; i <= 80; i++) {
            const t = i / 80;
            const a = t * cfg.turns * Math.PI * 2;
            const r = cfg.radius * (1 - t * 0.5);
            pts.push(new THREE.Vector3(Math.cos(a) * r, t * totalH, Math.sin(a) * r));
          }
          const { CatmullRomCurve3, TubeGeometry, MeshBasicMaterial, Mesh, AdditiveBlending, DoubleSide } = THREE;
          const curve = new CatmullRomCurve3(pts, false, "catmullrom", 0.5);
          const geo = new TubeGeometry(curve, 200, cfg.thick, 6, false);
          const mat = new MeshBasicMaterial({
            color: cfg.color, transparent: true, opacity: cfg.opacity,
            blending: AdditiveBlending, depthWrite: false, side: DoubleSide,
          });
          const mesh = new Mesh(geo, mat);
          mesh.userData.speed = cfg.speed;
          wrapper.add(mesh);
          list.push(mesh);
        });
        return list;
      }

      // ── Orbital rings ─────────────────────────────────────────────────────────
      function buildRings() {
        const list: THREE.Mesh[] = [];
        [
          { y: 32, r: 3.6, tube: 0.018, speed:  0.004,  color: 0xc9a84c, op: 0.32 },
          { y: 42, r: 2.2, tube: 0.013, speed: -0.005,  color: 0x4de8cc, op: 0.38 },
          { y: 50, r: 1.0, tube: 0.01,  speed:  0.009,  color: 0xc9a84c, op: 0.5  },
          { y: 32, r: 4.4, tube: 0.009, speed: -0.002,  color: 0x88bbff, op: 0.14 },
          { y: 22, r: 5.2, tube: 0.013, speed:  0.003,  color: 0x4de8cc, op: 0.1  },
        ].forEach((cfg) => {
          const mat = new THREE.MeshBasicMaterial({
            color: cfg.color, transparent: true, opacity: cfg.op,
            blending: THREE.AdditiveBlending, depthWrite: false,
          });
          const m = new THREE.Mesh(new THREE.TorusGeometry(cfg.r, cfg.tube, 8, 128), mat);
          m.position.y = cfg.y;
          m.rotation.x = Math.PI / 2;
          m.userData.speed = cfg.speed;
          wrapper.add(m);
          list.push(m);
        });
        return list;
      }

      // ── Pulse rings ───────────────────────────────────────────────────────────
      function buildPulse() {
        const list: THREE.Mesh[] = [];
        for (let i = 0; i < 5; i++) {
          const mat = new THREE.MeshBasicMaterial({
            color: i % 2 === 0 ? 0x4de8cc : 0xc9a84c,
            transparent: true, opacity: 0,
            side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false,
          });
          const m = new THREE.Mesh(new THREE.RingGeometry(0.8, 0.84, 80), mat);
          m.rotation.x = -Math.PI / 2;
          m.position.y = 0.3;
          m.userData.phase = i / 5;
          scene.add(m);
          list.push(m);
        }
        return list;
      }

      // ── Nebula ────────────────────────────────────────────────────────────────
      function buildNebula() {
        const mul = isMobile ? 0.5 : 1;
        [
          { count: Math.floor(400 * mul), size: 3.8, op: 0.022, color: 0x0a2848, spread: 50 },
          { count: Math.floor(300 * mul), size: 2.0, op: 0.038, color: 0x163850, spread: 35 },
          { count: Math.floor(200 * mul), size: 1.0, op: 0.065, color: 0x4de8cc, spread: 20 },
        ].forEach((cfg) => {
          const pos = new Float32Array(cfg.count * 3);
          for (let i = 0; i < cfg.count; i++) {
            const r = 3 + Math.random() * cfg.spread, a = Math.random() * Math.PI * 2;
            pos[i * 3] = Math.cos(a) * r;
            pos[i * 3 + 1] = -10 + Math.random() * 90;
            pos[i * 3 + 2] = Math.sin(a) * r;
          }
          const geo = new THREE.BufferGeometry();
          geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
          wrapper.add(
            new THREE.Points(
              geo,
              new THREE.PointsMaterial({
                color: cfg.color, size: cfg.size, transparent: true,
                opacity: cfg.op, blending: THREE.AdditiveBlending,
                depthWrite: false, sizeAttenuation: true,
              })
            )
          );
        });
      }

      // ── Atmospheric particles ─────────────────────────────────────────────────
      const ATMO = isMobile ? 600 : 2500;

      function buildAtmo() {
        const pos = new Float32Array(ATMO * 3);
        const vel = new Float32Array(ATMO * 3);
        const col = new Float32Array(ATMO * 3);
        for (let i = 0; i < ATMO; i++) {
          const r = 1.5 + Math.random() * 30, a = Math.random() * Math.PI * 2;
          pos[i * 3] = Math.cos(a) * r;
          pos[i * 3 + 1] = Math.random() * 62;
          pos[i * 3 + 2] = Math.sin(a) * r;
          vel[i * 3]     = (Math.random() - 0.5) * 0.003;
          vel[i * 3 + 1] = 0.001 + Math.random() * 0.004;
          vel[i * 3 + 2] = (Math.random() - 0.5) * 0.003;
          const t = Math.random();
          if (t < 0.55) { col[i * 3] = 0.99; col[i * 3 + 1] = 0.78; col[i * 3 + 2] = 0.35; }
          else if (t < 0.85) { col[i * 3] = 0.3; col[i * 3 + 1] = 0.91; col[i * 3 + 2] = 0.8; }
          else { col[i * 3] = 0.85; col[i * 3 + 1] = 0.9; col[i * 3 + 2] = 1.0; }
        }
        const geo = new THREE.BufferGeometry();
        geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
        geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
        const pts = new THREE.Points(
          geo,
          new THREE.PointsMaterial({
            size: 0.13, vertexColors: true, transparent: true, opacity: 0.78,
            blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true,
          })
        );
        wrapper.add(pts);

        // Velocity trails
        const tPos = new Float32Array(ATMO * 6);
        const tGeo = new THREE.BufferGeometry();
        tGeo.setAttribute("position", new THREE.BufferAttribute(tPos, 3));
        const trails = new THREE.LineSegments(
          tGeo,
          new THREE.LineBasicMaterial({
            color: 0xffffff, transparent: true, opacity: 0.38,
            blending: THREE.AdditiveBlending, depthWrite: false,
          })
        );
        wrapper.add(trails);
        return { pts, vel, pos, tPos, tGeo, trails };
      }

      // ── Stars ─────────────────────────────────────────────────────────────────
      function buildStars() {
        const n = isMobile ? 3000 : 12000;
        const p = new Float32Array(n * 3);
        const c = new Float32Array(n * 3);
        for (let i = 0; i < n; i++) {
          // Mix of far stars and close mid-ground stars that fill the screen
          const far = Math.random() > 0.4;
          p[i * 3] = (Math.random() - 0.5) * (far ? 800 : 120);
          p[i * 3 + 1] = far ? Math.random() * 400 + 5 : -20 + Math.random() * 100;
          p[i * 3 + 2] = (Math.random() - 0.5) * (far ? 800 : 120);
          const warm = Math.random() > 0.5;
          c[i * 3] = warm ? 1.0 : 0.7;
          c[i * 3 + 1] = warm ? 0.92 : 0.82;
          c[i * 3 + 2] = warm ? 0.7 : 1.0;
        }
        const geo = new THREE.BufferGeometry();
        geo.setAttribute("position", new THREE.BufferAttribute(p, 3));
        geo.setAttribute("color", new THREE.BufferAttribute(c, 3));
        const pts = new THREE.Points(
          geo,
          new THREE.PointsMaterial({
            size: 0.16, vertexColors: true, transparent: true,
            opacity: 0.65, sizeAttenuation: true,
          })
        );
        scene.add(pts);
        return pts;
      }

      // ── City lights ───────────────────────────────────────────────────────────
      function buildCity() {
        const n = 7000, p = new Float32Array(n * 3), c = new Float32Array(n * 3);
        for (let i = 0; i < n; i++) {
          const r = 8 + Math.random() * 200, a = Math.random() * Math.PI * 2;
          p[i * 3] = Math.cos(a) * r; p[i * 3 + 1] = -0.4 + Math.random() * 0.8; p[i * 3 + 2] = Math.sin(a) * r;
          const t = Math.random();
          if (t < 0.3)      { c[i * 3] = 1; c[i * 3 + 1] = 0.82; c[i * 3 + 2] = 0.35; }
          else if (t < 0.6) { c[i * 3] = 0.7; c[i * 3 + 1] = 0.88; c[i * 3 + 2] = 1; }
          else               { c[i * 3] = 1; c[i * 3 + 1] = 1; c[i * 3 + 2] = 1; }
        }
        const geo = new THREE.BufferGeometry();
        geo.setAttribute("position", new THREE.BufferAttribute(p, 3));
        geo.setAttribute("color", new THREE.BufferAttribute(c, 3));
        scene.add(new THREE.Points(geo, new THREE.PointsMaterial({
          size: 0.22, vertexColors: true, transparent: true, opacity: 0.85, sizeAttenuation: true,
        })));
      }

      // ── Build ─────────────────────────────────────────────────────────────────
      buildPillar();
      const ribbons = buildRibbons();
      const rings   = buildRings();
      const pulses  = buildPulse();
      buildNebula();
      const atmo  = buildAtmo();
      const stars = buildStars();
      buildCity();

      // ── Camera path — subtle arc, stays in the dense visual zone ─────────────
      const camPath = [
        { r: 14,  theta: Math.PI * 0.28,  y: 4,  lookY: 14 },
        { r: 13,  theta: Math.PI * 0.18,  y: 6,  lookY: 16 },
        { r: 12,  theta: Math.PI * 0.08,  y: 8,  lookY: 18 },
        { r: 11,  theta: -Math.PI * 0.04, y: 10, lookY: 20 },
        { r: 10,  theta: -Math.PI * 0.14, y: 12, lookY: 22 },
      ];
      const camState = { t: 0 };

      const scrollEl = document.getElementById("exp-scroll");
      if (scrollEl) {
        ScrollTrigger.create({
          trigger: scrollEl,
          start: "top top",
          end: "bottom bottom",
          scrub: 2.5,
          onUpdate(self) {
            camState.t = self.progress * (camPath.length - 1);
          },
        });
      }

      // Section reveals
      document.querySelectorAll(".exp-reveal").forEach((el) => {
        const targets = el.querySelectorAll(".exp-item");
        gsap.set(targets, { opacity: 0, y: 32 });
        ScrollTrigger.create({
          trigger: el,
          start: "top 72%",
          onEnter: () =>
            gsap.to(targets, { opacity: 1, y: 0, duration: 1.1, stagger: 0.08, ease: "power3.out" }),
        });
      });

      // Hero reveal
      gsap.to(".exp-hero-line", {
        opacity: 1, y: 0, duration: 1.5, stagger: 0.12,
        ease: "power3.out", delay: 0.4,
      });
      gsap.to(".exp-hero-sub", { opacity: 1, duration: 1.2, delay: 1.1 });
      gsap.to(".exp-scroll-cue", { opacity: 1, duration: 1, delay: 1.8 });

      // ── Mouse ─────────────────────────────────────────────────────────────────
      let normX = 0, normY = 0, smoothX = 0, smoothY = 0;
      const onMouse = (e: MouseEvent) => {
        normX = (e.clientX / window.innerWidth - 0.5) * 2;
        normY = (e.clientY / window.innerHeight - 0.5) * 2;
      };
      const onTouch = (e: TouchEvent) => {
        normX = (e.touches[0].clientX / window.innerWidth - 0.5) * 2;
        normY = (e.touches[0].clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener("mousemove", onMouse);
      window.addEventListener("touchmove", onTouch, { passive: true });

      // ── Camera update ─────────────────────────────────────────────────────────
      const _look = new THREE.Vector3();
      let driftT = 0;

      function updateCamera(t: number) {
        driftT += 0.0004;
        const dX = Math.sin(driftT) * 0.35;
        const dY = Math.sin(driftT * 0.6) * 0.18;
        const dZ = Math.cos(driftT * 0.45) * 0.22;

        const i = Math.min(Math.floor(t), camPath.length - 2);
        const f = t - i;
        const a = camPath[i], b = camPath[i + 1];
        const rI     = a.r     + (b.r     - a.r    ) * f;
        const thetaI = a.theta + (b.theta - a.theta) * f;
        const yI     = a.y     + (b.y     - a.y    ) * f;
        const lookYI = a.lookY + (b.lookY - a.lookY) * f;

        camera.position.x += ((rI * Math.cos(thetaI)) + smoothX * 2.2 + dX - camera.position.x) * 0.04;
        camera.position.y += (yI - smoothY * 1.3 + dY - camera.position.y) * 0.04;
        camera.position.z += ((rI * Math.sin(thetaI)) + dZ - camera.position.z) * 0.04;

        _look.set(smoothX * 0.8, lookYI - smoothY * 0.6, 0);
        camera.lookAt(_look);
      }

      // ── Resize ────────────────────────────────────────────────────────────────
      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        composer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", onResize);

      // ── Render loop ───────────────────────────────────────────────────────────
      let frame = 0;

      const animate = () => {
        if (destroyed) return;
        rafId = requestAnimationFrame(animate);
        frame++;

        smoothX += (normX - smoothX) * 0.048;
        smoothY += (normY - smoothY) * 0.048;

        updateCamera(camState.t);

        // Scene tilt
        wrapper.rotation.x += ( smoothY * 0.05 - wrapper.rotation.x) * 0.04;
        wrapper.rotation.z += (-smoothX * 0.05 - wrapper.rotation.z) * 0.04;

        // Spin ribbons & rings
        ribbons.forEach((r) => { r.rotation.y += r.userData.speed; });
        rings.forEach((r)   => { r.rotation.z += r.userData.speed; });

        // Pulse rings
        pulses.forEach((ring) => {
          const ph = (frame * 0.007 + ring.userData.phase) % 1;
          const sc = 2 + ph * 22;
          ring.scale.set(sc, sc, sc);
          (ring.material as THREE.MeshBasicMaterial).opacity = Math.pow(1 - ph, 1.5) * 0.55;
        });

        // Orbit light
        orbitLight.position.set(
          Math.cos(frame * 0.008) * 12,
          18 + Math.sin(frame * 0.005) * 14,
          Math.sin(frame * 0.008) * 12
        );

        // ── Particle physics ────────────────────────────────────────────────────
        const aPos = atmo.pos, aVel = atmo.vel, tPos = atmo.tPos;
        const mwx = smoothX * 10, mwz = smoothY * 6;

        for (let i = 0; i < ATMO; i++) {
          aVel[i * 3]     *= 0.94;
          aVel[i * 3 + 1] *= 0.97;
          aVel[i * 3 + 2] *= 0.94;

          aVel[i * 3 + 1] += 0.0018;
          if (aVel[i * 3 + 1] > 0.032) aVel[i * 3 + 1] = 0.032;

          aPos[i * 3]     += aVel[i * 3];
          aPos[i * 3 + 1] += aVel[i * 3 + 1];
          aPos[i * 3 + 2] += aVel[i * 3 + 2];

          aPos[i * 3]     *= 0.9999;
          aPos[i * 3 + 2] *= 0.9999;

          // Mouse repulsion — big radius, aggressive force
          const dx = aPos[i * 3] - mwx, dz = aPos[i * 3 + 2] - mwz;
          const d2 = dx * dx + dz * dz;
          if (d2 < 120 && d2 > 0.01) {
            const d = Math.sqrt(d2);
            const f = ((11 - d) / 11) * 0.22;
            aVel[i * 3]     += (dx / d) * f;
            aVel[i * 3 + 2] += (dz / d) * f;
          }

          if (aPos[i * 3 + 1] > 64) {
            aPos[i * 3 + 1] = -1 + Math.random();
            aPos[i * 3]     = (Math.random() - 0.5) * 60;
            aPos[i * 3 + 2] = (Math.random() - 0.5) * 60;
            aVel[i * 3]     = (Math.random() - 0.5) * 0.003;
            aVel[i * 3 + 1] = 0.001 + Math.random() * 0.004;
            aVel[i * 3 + 2] = (Math.random() - 0.5) * 0.003;
          }

          // Trail
          const spd = Math.sqrt(
            aVel[i * 3] * aVel[i * 3] +
            aVel[i * 3 + 1] * aVel[i * 3 + 1] +
            aVel[i * 3 + 2] * aVel[i * 3 + 2]
          );
          const tLen = spd * 42;
          tPos[i * 6]     = aPos[i * 3];
          tPos[i * 6 + 1] = aPos[i * 3 + 1];
          tPos[i * 6 + 2] = aPos[i * 3 + 2];
          tPos[i * 6 + 3] = aPos[i * 3]     - (aVel[i * 3]     / spd) * (tLen || 0);
          tPos[i * 6 + 4] = aPos[i * 3 + 1] - (aVel[i * 3 + 1] / spd) * (tLen || 0);
          tPos[i * 6 + 5] = aPos[i * 3 + 2] - (aVel[i * 3 + 2] / spd) * (tLen || 0);
        }

        atmo.pts.geometry.attributes.position.needsUpdate = true;
        atmo.tGeo.attributes.position.needsUpdate = true;

        const cursorSpd = Math.sqrt(smoothX * smoothX + smoothY * smoothY);
        (atmo.trails.material as THREE.LineBasicMaterial).opacity = 0.22 + cursorSpd * 0.8;

        // Pulse lights
        goldA.intensity  = 10 + Math.sin(frame * 0.02)  * 5;
        goldB.intensity  = 7  + Math.cos(frame * 0.015) * 3.5;
        apex.intensity   = 16 + Math.sin(frame * 0.05)  * 9;
        tealCore.intensity = 5 + Math.sin(frame * 0.03)  * 2.5;

        bloom.strength = (isMobile ? 1.0 : 2.0) + Math.sin(frame * 0.01) * 0.2;

        stars.rotation.y = frame * 0.00004;

        composer.render();
      };

      animate();

      return () => {
        window.removeEventListener("mousemove", onMouse);
        window.removeEventListener("touchmove", onTouch);
        window.removeEventListener("resize", onResize);
        ScrollTrigger.getAll().forEach((t) => t.kill());
        lenis.destroy();
        renderer.dispose();
        composer.dispose();
      };
    };

    const cleanup = init();

    return () => {
      destroyed = true;
      cancelAnimationFrame(rafId);
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <>
      {/* Canvas — fixed behind everything */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          width: "100vw",
          height: "100vh",
        }}
      />

      {/* No vignette — full immersive scene everywhere */}

      {/* Back button */}
      <Link
        href="/"
        style={{
          position: "fixed",
          top: "1.8rem",
          left: "2rem",
          zIndex: 100,
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.62rem",
          letterSpacing: "0.2em",
          color: "rgba(221,232,240,0.5)",
          transition: "color 0.2s",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(221,232,240,0.9)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(221,232,240,0.5)")}
      >
        ← JDLO
      </Link>

      {/* Scroll container */}
      <div id="exp-scroll" style={{ position: "relative", zIndex: 20, background: "transparent" }}>

        {/* ── Section 0: Hero ─────────────────────────────────────────────── */}
        <section style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 0 8vh 7vw",
          pointerEvents: "none",
        }}>
          <div style={{ lineHeight: 0.82, marginBottom: "2.5rem" }}>
            {["JDLO"].map((line, i) => (
              <span
                key={i}
                className="exp-hero-line"
                style={{
                  display: "block",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(6rem, 22vw, 20rem)",
                  fontWeight: 300,
                  letterSpacing: "-0.04em",
                  color: "#dde8f0",
                  opacity: 0,
                  transform: "translateY(50px)",
                }}
              >
                {line}
              </span>
            ))}
          </div>
          <p
            className="exp-hero-sub"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.32em",
              color: "#4de8cc",
              opacity: 0,
              marginBottom: "3rem",
            }}
          >
            SYSTEMS · SITES · AI · EXPERIENCES
          </p>
          {/* Scroll cue */}
          <div
            className="exp-scroll-cue"
            style={{
              position: "absolute",
              bottom: "6vh",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.8rem",
              opacity: 0,
              pointerEvents: "none",
            }}
          >
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.28em",
              color: "#4de8cc",
              animation: "xblink 2.5s ease-in-out infinite",
            }}>
              SCROLL
            </span>
            <div style={{
              width: 1,
              height: 44,
              background: "linear-gradient(to bottom, #4de8cc, transparent)",
              animation: "xdrip 2.5s ease-in-out infinite",
            }} />
          </div>
        </section>

        {/* ── Section 1: Stats ─────────────────────────────────────────────── */}
        <section style={{ height: "100vh", display: "flex", alignItems: "center", padding: "0 0 0 8vw", background: "transparent" }}>
          <div className="exp-reveal" style={{ maxWidth: 520 }}>
            <p className="exp-item" style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.3em",
              color: "#4de8cc",
              marginBottom: "3rem",
            }}>
              01 — BY THE NUMBERS
            </p>
            {[
              { n: "25+",    label: "Builds shipped" },
              { n: "$200K+", label: "Revenue generated for clients" },
              { n: "0",      label: "Templates ever used" },
            ].map(({ n, label }) => (
              <div
                key={n}
                className="exp-item"
                style={{
                  borderTop: "1px solid rgba(221,232,240,0.08)",
                  padding: "2rem 0",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "2rem",
                }}
              >
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
                  fontWeight: 700,
                  color: "rgba(221,232,240,0.07)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  minWidth: "7rem",
                }}>
                  {n}
                </span>
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(1rem, 2vw, 1.4rem)",
                  fontWeight: 300,
                  color: "rgba(221,232,240,0.7)",
                  letterSpacing: "-0.01em",
                }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 2: The story ──────────────────────────────────────────── */}
        <section style={{
          height: "100vh", display: "flex", alignItems: "center",
          justifyContent: "flex-end", padding: "0 8vw 0 0", background: "transparent",
        }}>
          <div className="exp-reveal" style={{ maxWidth: 480 }}>
            <p className="exp-item" style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.3em",
              color: "#4de8cc",
              marginBottom: "3rem",
            }}>
              02 — WHO I AM
            </p>
            <h2 className="exp-item" style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 4.5vw, 3.6rem)",
              fontWeight: 300,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "#dde8f0",
              marginBottom: "2rem",
            }}>
              Self-taught.<br />Self-made.<br />No shortcuts.
            </h2>
            <p className="exp-item" style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.9rem",
              lineHeight: 1.85,
              color: "rgba(221,232,240,0.45)",
              fontWeight: 300,
              marginBottom: "2.5rem",
            }}>
              Learned the entire modern stack in under a year.
              Built casinos, enterprise tools, AI systems, and games
              for businesses from local shops to six-figure operations.
              I move fast, build clean, and don&apos;t use templates.
            </p>
            <a
              href="/work"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                color: "#C9A84C",
                pointerEvents: "all",
              }}
            >
              SEE WHAT I&apos;VE BUILT <span>→</span>
            </a>
          </div>
        </section>

        {/* ── Section 3: CTA ───────────────────────────────────────────────── */}
        <section style={{
          height: "100vh", display: "flex", alignItems: "center",
          justifyContent: "center", flexDirection: "column", textAlign: "center",
          padding: "0 6vw", background: "transparent",
        }}>
          <div className="exp-reveal">
            <p className="exp-item" style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.3em",
              color: "#4de8cc",
              marginBottom: "2rem",
            }}>
              03 — LET&apos;S BUILD
            </p>
            <h2
              className="exp-item"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(3rem, 8vw, 7rem)",
                fontWeight: 300,
                letterSpacing: "-0.04em",
                lineHeight: 0.9,
                color: "#dde8f0",
                marginBottom: "1.5rem",
              }}
            >
              You bring<br />the vision.
            </h2>
            <p className="exp-item" style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.4rem)",
              fontWeight: 300,
              color: "rgba(221,232,240,0.35)",
              letterSpacing: "-0.01em",
              marginBottom: "3rem",
            }}>
              I&apos;ll build the rest.
            </p>
            <div className="exp-item" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="/contact"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  padding: "0.9rem 2.4rem",
                  background: "#C9A84C",
                  border: "1px solid #C9A84C",
                  borderRadius: "100px",
                  color: "#060608",
                  fontWeight: 700,
                  pointerEvents: "all",
                }}
              >
                START A PROJECT
              </a>
              <a
                href="https://instagram.com/jdlo"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  padding: "0.9rem 2.4rem",
                  border: "1px solid rgba(221,232,240,0.2)",
                  borderRadius: "100px",
                  color: "rgba(221,232,240,0.7)",
                  pointerEvents: "all",
                }}
              >
                DM @JDLO
              </a>
            </div>
          </div>
        </section>

      </div>

      {/* Google Fonts + keyframes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Space+Grotesk:wght@300;400;500&display=swap');
        @keyframes xblink { 0%,100% { opacity:0.3; } 50% { opacity:1; } }
        @keyframes xdrip {
          0%   { transform:scaleY(0); transform-origin:top;    opacity:0; }
          30%  { transform:scaleY(1); transform-origin:top;    opacity:1; }
          70%  { transform:scaleY(1); transform-origin:bottom; opacity:1; }
          100% { transform:scaleY(0); transform-origin:bottom; opacity:0; }
        }
        .exp-hero-line { transition: opacity 0s, transform 0s; }
        /* Override global site styles for this isolated page */
        body { background: #040810 !important; }
        body::after { display: none !important; }
        body::before { display: none !important; }
      `}</style>
    </>
  );
}
