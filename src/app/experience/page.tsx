"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";

export default function ExperiencePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    let destroyed = false;
    let rafId: number;

    const init = () => {
      const isMobile =
        window.innerWidth < 768 ||
        !window.matchMedia("(hover: hover) and (pointer: fine)").matches;

      // ── Renderer ──────────────────────────────────────────────────────────────
      const canvas = canvasRef.current!;
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: !isMobile, alpha: false });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 0.9;
      renderer.outputColorSpace = THREE.SRGBColorSpace;

      // ── Scene ─────────────────────────────────────────────────────────────────
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x060e1c);
      scene.fog = new THREE.FogExp2(0x060e1c, 0.001);

      const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(12, 2, 12);
      camera.lookAt(0, 8, 0);

      // ── Post-processing ───────────────────────────────────────────────────────
      const composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));
      const bloom = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        isMobile ? 1.0 : 2.0, 0.65, 0.04
      );
      composer.addPass(bloom);
      const BASE_CHROMA = isMobile ? 0.0007 : 0.0016;
      const chromaShader = {
        uniforms: { tDiffuse: { value: null }, amount: { value: BASE_CHROMA } },
        vertexShader: `varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
        fragmentShader: `uniform sampler2D tDiffuse;uniform float amount;varying vec2 vUv;
          void main(){vec2 dir=vUv-0.5;float d=length(dir);vec2 off=normalize(dir+0.0001)*amount*d*d;
          float r=texture2D(tDiffuse,vUv+off).r;float g=texture2D(tDiffuse,vUv).g;float b=texture2D(tDiffuse,vUv-off).b;
          gl_FragColor=vec4(r,g,b,1.0);}`,
      };
      const chromaPass = new ShaderPass(chromaShader);
      composer.addPass(chromaPass);
      composer.addPass(new OutputPass());

      // ── Lights ───────────────────────────────────────────────────────────────
      scene.add(new THREE.AmbientLight(0x0a1428, 3));
      const moon = new THREE.DirectionalLight(0x6688bb, 1.0);
      moon.position.set(-12, 30, -8); scene.add(moon);
      const goldA = new THREE.PointLight(0xc9a84c, 12, 50);
      goldA.position.set(5, 12, 5); scene.add(goldA);
      const goldB = new THREE.PointLight(0xc9a84c, 8, 40);
      goldB.position.set(-5, 28, 3); scene.add(goldB);
      const tealCore = new THREE.PointLight(0x4de8cc, 6, 28);
      tealCore.position.set(0, 0, 6); scene.add(tealCore);
      const apex = new THREE.PointLight(0xfff0cc, 18, 16);
      apex.position.set(0, 55, 0); scene.add(apex);
      const orbitLight = new THREE.PointLight(0x4de8cc, 2.5, 35);
      scene.add(orbitLight);

      const wrapper = new THREE.Group();
      scene.add(wrapper);

      // ── Pillar ────────────────────────────────────────────────────────────────
      function buildPillar() {
        const g = new THREE.Group(), segments = 14;
        const goldMat = new THREE.MeshStandardMaterial({ color:0xc9a84c, metalness:0.98, roughness:0.02, emissive:0x5a3a00, emissiveIntensity:1.2 });
        const glassMat = new THREE.MeshStandardMaterial({ color:0x2244aa, metalness:0.96, roughness:0.04, emissive:0x0a1e40, emissiveIntensity:1.6 });
        for (let i=0;i<segments;i++) {
          const t=i/segments,r=1.4*(1-t*0.75),h=3.5,y=i*h;
          const m=new THREE.Mesh(new THREE.CylinderGeometry(r*0.85,r,h,6),i%3===0?goldMat:glassMat);
          m.position.y=y+h/2;m.rotation.y=i*0.15;g.add(m);
          if(i%2===0){const band=new THREE.Mesh(new THREE.CylinderGeometry(r*1.05,r*1.05,0.12,24),goldMat);band.position.y=y+h;g.add(band);}
        }
        const spire=new THREE.Mesh(new THREE.CylinderGeometry(0.01,0.18,12,10),goldMat);
        spire.position.y=segments*3.5+2;g.add(spire);
        const orb=new THREE.Mesh(new THREE.SphereGeometry(0.2,12,12),new THREE.MeshBasicMaterial({color:0xfff8cc}));
        orb.position.y=segments*3.5+14;g.add(orb);
        const ground=new THREE.Mesh(new THREE.CylinderGeometry(7,7,0.18,64),new THREE.MeshStandardMaterial({color:0x0b1520,roughness:0.9,emissive:0x020810,emissiveIntensity:0.7}));
        ground.position.y=-0.09;g.add(ground);wrapper.add(g);
      }

      // ── Ribbons ───────────────────────────────────────────────────────────────
      function buildRibbons() {
        const list: THREE.Mesh[] = [];
        [{color:0xc9a84c,opacity:0.3,turns:2.5,radius:3.6,thick:0.055,speed:0.003},{color:0x4de8cc,opacity:0.22,turns:2.0,radius:5.0,thick:0.045,speed:-0.002},{color:0xc9a84c,opacity:0.14,turns:3.2,radius:6.4,thick:0.035,speed:0.0015},{color:0x88bbff,opacity:0.1,turns:1.5,radius:4.4,thick:0.04,speed:-0.004}].forEach(cfg=>{
          const pts=[];
          for(let i=0;i<=80;i++){const t=i/80,a=t*cfg.turns*Math.PI*2,r=cfg.radius*(1-t*0.5);pts.push(new THREE.Vector3(Math.cos(a)*r,t*56,Math.sin(a)*r));}
          const mat=new THREE.MeshBasicMaterial({color:cfg.color,transparent:true,opacity:cfg.opacity,blending:THREE.AdditiveBlending,depthWrite:false,side:THREE.DoubleSide});
          const mesh=new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts,false,"catmullrom",0.5),200,cfg.thick,6,false),mat);
          mesh.userData.speed=cfg.speed;wrapper.add(mesh);list.push(mesh);
        });
        return list;
      }

      // ── Rings ─────────────────────────────────────────────────────────────────
      function buildRings() {
        const list: THREE.Mesh[] = [];
        [{y:32,r:3.6,tube:0.018,speed:0.004,color:0xc9a84c,op:0.32},{y:42,r:2.2,tube:0.013,speed:-0.005,color:0x4de8cc,op:0.38},{y:50,r:1.0,tube:0.01,speed:0.009,color:0xc9a84c,op:0.5},{y:32,r:4.4,tube:0.009,speed:-0.002,color:0x88bbff,op:0.14},{y:22,r:5.2,tube:0.013,speed:0.003,color:0x4de8cc,op:0.1}].forEach(cfg=>{
          const m=new THREE.Mesh(new THREE.TorusGeometry(cfg.r,cfg.tube,8,128),new THREE.MeshBasicMaterial({color:cfg.color,transparent:true,opacity:cfg.op,blending:THREE.AdditiveBlending,depthWrite:false}));
          m.position.y=cfg.y;m.rotation.x=Math.PI/2;m.userData.speed=cfg.speed;wrapper.add(m);list.push(m);
        });
        return list;
      }

      // ── Pulse rings ───────────────────────────────────────────────────────────
      function buildPulse() {
        const list: THREE.Mesh[] = [];
        for(let i=0;i<5;i++){
          const mat=new THREE.MeshBasicMaterial({color:i%2===0?0x4de8cc:0xc9a84c,transparent:true,opacity:0,side:THREE.DoubleSide,blending:THREE.AdditiveBlending,depthWrite:false});
          const m=new THREE.Mesh(new THREE.RingGeometry(0.8,0.84,80),mat);
          m.rotation.x=-Math.PI/2;m.position.y=0.3;m.userData.phase=i/5;scene.add(m);list.push(m);
        }
        return list;
      }

      // ── Nebula ────────────────────────────────────────────────────────────────
      function buildNebula() {
        [{count:Math.floor(400*(isMobile?.5:1)),size:3.8,op:0.022,color:0x0a2848,spread:50},{count:Math.floor(300*(isMobile?.5:1)),size:2.0,op:0.038,color:0x163850,spread:35},{count:Math.floor(200*(isMobile?.5:1)),size:1.0,op:0.065,color:0x4de8cc,spread:20}].forEach(cfg=>{
          const pos=new Float32Array(cfg.count*3);
          for(let i=0;i<cfg.count;i++){const r=3+Math.random()*cfg.spread,a=Math.random()*Math.PI*2;pos[i*3]=Math.cos(a)*r;pos[i*3+1]=-10+Math.random()*90;pos[i*3+2]=Math.sin(a)*r;}
          const geo=new THREE.BufferGeometry();geo.setAttribute("position",new THREE.BufferAttribute(pos,3));
          wrapper.add(new THREE.Points(geo,new THREE.PointsMaterial({color:cfg.color,size:cfg.size,transparent:true,opacity:cfg.op,blending:THREE.AdditiveBlending,depthWrite:false,sizeAttenuation:true})));
        });
      }

      // ── Atmospheric particles ─────────────────────────────────────────────────
      const ATMO=isMobile?600:2500;
      function buildAtmo() {
        const pos=new Float32Array(ATMO*3),vel=new Float32Array(ATMO*3),col=new Float32Array(ATMO*3);
        for(let i=0;i<ATMO;i++){
          const r=1.5+Math.random()*30,a=Math.random()*Math.PI*2;
          pos[i*3]=Math.cos(a)*r;pos[i*3+1]=Math.random()*62;pos[i*3+2]=Math.sin(a)*r;
          vel[i*3]=(Math.random()-0.5)*0.003;vel[i*3+1]=0.001+Math.random()*0.004;vel[i*3+2]=(Math.random()-0.5)*0.003;
          const t=Math.random();
          if(t<0.55){col[i*3]=0.99;col[i*3+1]=0.78;col[i*3+2]=0.35;}
          else if(t<0.85){col[i*3]=0.3;col[i*3+1]=0.91;col[i*3+2]=0.8;}
          else{col[i*3]=0.85;col[i*3+1]=0.9;col[i*3+2]=1.0;}
        }
        const geo=new THREE.BufferGeometry();
        geo.setAttribute("position",new THREE.BufferAttribute(pos,3));
        geo.setAttribute("color",new THREE.BufferAttribute(col,3));
        const pts=new THREE.Points(geo,new THREE.PointsMaterial({size:0.13,vertexColors:true,transparent:true,opacity:0.78,blending:THREE.AdditiveBlending,depthWrite:false,sizeAttenuation:true}));
        wrapper.add(pts);
        const tPos=new Float32Array(ATMO*6),tGeo=new THREE.BufferGeometry();
        tGeo.setAttribute("position",new THREE.BufferAttribute(tPos,3));
        const trails=new THREE.LineSegments(tGeo,new THREE.LineBasicMaterial({color:0xffffff,transparent:true,opacity:0.38,blending:THREE.AdditiveBlending,depthWrite:false}));
        wrapper.add(trails);
        return{pts,vel,pos,tPos,tGeo,trails};
      }

      // ── Stars ─────────────────────────────────────────────────────────────────
      function buildStars() {
        const n=isMobile?3000:12000,p=new Float32Array(n*3),c=new Float32Array(n*3);
        for(let i=0;i<n;i++){
          const far=Math.random()>0.4;
          p[i*3]=(Math.random()-0.5)*(far?800:120);p[i*3+1]=far?Math.random()*400+5:-20+Math.random()*100;p[i*3+2]=(Math.random()-0.5)*(far?800:120);
          const warm=Math.random()>0.5;c[i*3]=warm?1.0:0.7;c[i*3+1]=warm?0.92:0.82;c[i*3+2]=warm?0.7:1.0;
        }
        const geo=new THREE.BufferGeometry();geo.setAttribute("position",new THREE.BufferAttribute(p,3));geo.setAttribute("color",new THREE.BufferAttribute(c,3));
        const pts=new THREE.Points(geo,new THREE.PointsMaterial({size:0.16,vertexColors:true,transparent:true,opacity:0.65,sizeAttenuation:true}));
        scene.add(pts);return pts;
      }

      // ── City lights ───────────────────────────────────────────────────────────
      function buildCity() {
        const n=7000,p=new Float32Array(n*3),c=new Float32Array(n*3);
        for(let i=0;i<n;i++){const r=8+Math.random()*200,a=Math.random()*Math.PI*2;p[i*3]=Math.cos(a)*r;p[i*3+1]=-0.4+Math.random()*0.8;p[i*3+2]=Math.sin(a)*r;const t=Math.random();if(t<0.3){c[i*3]=1;c[i*3+1]=0.82;c[i*3+2]=0.35;}else if(t<0.6){c[i*3]=0.7;c[i*3+1]=0.88;c[i*3+2]=1;}else{c[i*3]=1;c[i*3+1]=1;c[i*3+2]=1;}}
        const geo=new THREE.BufferGeometry();geo.setAttribute("position",new THREE.BufferAttribute(p,3));geo.setAttribute("color",new THREE.BufferAttribute(c,3));
        scene.add(new THREE.Points(geo,new THREE.PointsMaterial({size:0.22,vertexColors:true,transparent:true,opacity:0.85,sizeAttenuation:true})));
      }

      buildPillar();
      const ribbons=buildRibbons();
      const rings=buildRings();
      const pulses=buildPulse();
      buildNebula();
      const atmo=buildAtmo();
      const stars=buildStars();
      buildCity();

      // ── Camera path ───────────────────────────────────────────────────────────
      const camPath=[
        {r:14,theta:Math.PI*0.28,y:4,lookY:14},
        {r:13,theta:Math.PI*0.18,y:6,lookY:16},
        {r:12,theta:Math.PI*0.08,y:8,lookY:18},
        {r:11,theta:-Math.PI*0.04,y:10,lookY:20},
        {r:10,theta:-Math.PI*0.14,y:12,lookY:22},
      ];

      // ── Scroll lerp ───────────────────────────────────────────────────────────
      let scrollTarget=0,scrollCurrent=0,prevScroll=0;
      const LERP=0.07;

      // ── DOM refs ──────────────────────────────────────────────────────────────
      const $=<T extends HTMLElement>(id:string)=>document.getElementById(id) as T|null;
      const progressBar=$("exp-pb");

      // ── Scramble charset ──────────────────────────────────────────────────────
      const CHARS="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@!";

      // ── Hero scramble items (letters only) ────────────────────────────────────
      type HeroItem={el:HTMLElement;kind:"scramble"|"fade";vs:number;ve:number;xs?:number;xe?:number;};
      const heroItems:HeroItem[]=[];
      const regHero=(id:string,kind:"scramble"|"fade",vs:number,ve:number,xs?:number,xe?:number)=>{
        const el=$(id);if(el)heroItems.push({el,kind,vs,ve,xs,xe});
      };

      regHero("h-J","scramble",0.00,0.06,0.18,0.24);
      regHero("h-D","scramble",0.02,0.08,0.18,0.24);
      regHero("h-L","scramble",0.04,0.10,0.18,0.24);
      regHero("h-O","scramble",0.06,0.12,0.18,0.24);
      regHero("h-sub","fade",0.08,0.14,0.18,0.24);
      regHero("h-cue","fade",0.12,0.18,0.14,0.20);

      // ── Panel animation system ────────────────────────────────────────────────
      // Each panel is a glass card that rotates from angled → face-on while
      // flying forward out of the 3D scene (rotateY + rotateX + translateZ)
      type PanelItem={el:HTMLElement;vs:number;ve:number;xs?:number;xe?:number;rotY:number;rotX:number;};
      const panelItems:PanelItem[]=[];
      const regPanel=(id:string,vs:number,ve:number,rotY:number,rotX:number,xs?:number,xe?:number)=>{
        const el=$(id);if(el)panelItems.push({el,vs,ve,rotY,rotX,xs,xe});
      };

      // Stats panel: enters from the left (rotateY negative = left edge toward viewer)
      regPanel("panel-stats",0.22,0.42,-32,10,0.52,0.62);
      // Story panel: enters from the right (rotateY positive = right edge toward viewer)
      regPanel("panel-story",0.54,0.74,28,-8,0.82,0.90);
      // CTA panel: straight-in (no Y tilt, slight X tilt for depth)
      regPanel("panel-cta",0.84,0.97,0,16);

      const eOut=(t:number)=>1-Math.pow(1-t,3);
      const eIn=(t:number)=>t*t*t;
      const clamp=(v:number,lo:number,hi:number)=>Math.max(lo,Math.min(hi,v));

      // ── Update hero letters ───────────────────────────────────────────────────
      const updateHero=(p:number)=>{
        for(const{el,kind,vs,ve,xs,xe}of heroItems){
          const enterT=clamp((p-vs)/(ve-vs),0,1);
          let opacity:number,tz:number;
          if(xs!==undefined&&xe!==undefined&&p>xs){
            const exitT=eIn(clamp((p-xs)/(xe-xs),0,1));
            opacity=(1-exitT)*(enterT>=1?1:eOut(enterT));
            tz=-exitT*80;
          }else{
            const e=eOut(enterT);
            opacity=e;
            tz=(1-e)*(kind==="scramble"?-500:-40);
          }
          el.style.opacity=String(Math.max(0,Math.min(1,opacity)));
          el.style.transform=`perspective(1000px) translateZ(${tz.toFixed(1)}px)`;
          if(kind==="scramble"){
            const finalChar=el.dataset.final??"";
            if(enterT>0&&enterT<0.65)el.textContent=CHARS[Math.floor(Math.random()*CHARS.length)];
            else if(enterT>=0.65)el.textContent=finalChar;
          }
        }
      };

      // ── Update panels — the "sign pull-out" effect ────────────────────────────
      const updatePanels=(p:number)=>{
        for(const{el,vs,ve,xs,xe,rotY,rotX}of panelItems){
          const enterT=clamp((p-vs)/(ve-vs),0,1);
          let opacity:number,tz:number,ry:number,rx:number;
          if(xs!==undefined&&xe!==undefined&&p>xs){
            const exitT=eIn(clamp((p-xs)/(xe-xs),0,1));
            const e=eOut(Math.min(enterT,1));
            opacity=(1-exitT)*e;
            tz=-exitT*100;
            ry=exitT*rotY*0.4;   // re-tilt as it exits
            rx=exitT*rotX*0.4;
          }else{
            const e=eOut(enterT);
            opacity=e;
            tz=(1-e)*-600;       // fly from 600px behind screen plane
            ry=(1-e)*rotY;       // rotate from angled to face-on
            rx=(1-e)*rotX;
          }
          el.style.opacity=String(Math.max(0,Math.min(1,opacity)));
          // Store for spin pass to layer scroll-velocity tilt on top
          el.dataset.pry=ry.toFixed(2);
          el.dataset.prx=rx.toFixed(2);
          el.dataset.ptz=tz.toFixed(1);
        }
      };

      // ── Stat counters ─────────────────────────────────────────────────────────
      type Counter={el:HTMLElement;target:number;prefix:string;suffix:string;val:number;triggered:boolean;};
      const counters:Counter[]=[];
      ([
        {id:"s1-n0",target:25, prefix:"",  suffix:"+", threshold:0.34},
        {id:"s1-n1",target:200,prefix:"$", suffix:"K+",threshold:0.37},
        {id:"s1-n2",target:0,  prefix:"",  suffix:"",  threshold:0.40},
      ] as const).forEach(({id,target,prefix,suffix,threshold})=>{
        const el=$(id);
        if(el)counters.push({el,target,prefix,suffix,val:0,triggered:false});
        if(el)(el as HTMLElement&{dataset:DOMStringMap}).dataset.threshold=String(threshold);
      });

      const updateCounters=(p:number)=>{
        counters.forEach(c=>{
          const thr=parseFloat((c.el as HTMLElement&{dataset:DOMStringMap}).dataset.threshold??"1");
          if(!c.triggered&&p>thr)c.triggered=true;
          if(c.triggered&&c.val<c.target){
            c.val=Math.min(c.target,c.val+(c.target-c.val)*0.08+0.6);
            c.el.textContent=c.prefix+Math.floor(c.val)+c.suffix;
          }
        });
      };

      // ── Scroll-velocity spin (accumulates, decays) ────────────────────────────
      let scrollSpin=0;
      // Stat numbers twirl hard on scroll
      const numEls=[$("s1-n0"),$("s1-n1"),$("s1-n2")].filter(Boolean) as HTMLElement[];

      // Init all hidden
      updateHero(0);
      updatePanels(0);
      // Apply initial panel transforms
      for(const{el}of panelItems){
        el.style.transform=`perspective(1200px) rotateY(${el.dataset.pry??"0"}deg) rotateX(${el.dataset.prx??"0"}deg) translateZ(${el.dataset.ptz??"0"}px)`;
      }

      // ── Mouse ─────────────────────────────────────────────────────────────────
      let normX=0,normY=0,smoothX=0,smoothY=0,driftT=0;
      const onMouse=(e:MouseEvent)=>{
        normX=(e.clientX/window.innerWidth-0.5)*2;
        normY=(e.clientY/window.innerHeight-0.5)*2;
      };
      const onTouch=(e:TouchEvent)=>{
        normX=(e.touches[0].clientX/window.innerWidth-0.5)*2;
        normY=(e.touches[0].clientY/window.innerHeight-0.5)*2;
      };
      window.addEventListener("mousemove",onMouse);
      window.addEventListener("touchmove",onTouch,{passive:true});

      // ── Camera update ─────────────────────────────────────────────────────────
      const _look=new THREE.Vector3();
      function updateCamera(t:number){
        driftT+=0.0004;
        const dX=Math.sin(driftT)*0.35,dY=Math.sin(driftT*0.6)*0.18,dZ=Math.cos(driftT*0.45)*0.22;
        const i=Math.min(Math.floor(t),camPath.length-2),f=t-i;
        const a=camPath[i],b=camPath[i+1];
        const rI=a.r+(b.r-a.r)*f,thetaI=a.theta+(b.theta-a.theta)*f;
        const yI=a.y+(b.y-a.y)*f,lookYI=a.lookY+(b.lookY-a.lookY)*f;
        camera.position.x+=((rI*Math.cos(thetaI))+smoothX*2.2+dX-camera.position.x)*0.04;
        camera.position.y+=(yI-smoothY*1.3+dY-camera.position.y)*0.04;
        camera.position.z+=((rI*Math.sin(thetaI))+dZ-camera.position.z)*0.04;
        _look.set(smoothX*0.8,lookYI-smoothY*0.6,0);camera.lookAt(_look);
      }

      // ── Resize ────────────────────────────────────────────────────────────────
      const onResize=()=>{
        camera.aspect=window.innerWidth/window.innerHeight;camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth,window.innerHeight);composer.setSize(window.innerWidth,window.innerHeight);
      };
      window.addEventListener("resize",onResize);

      // ── Render loop ───────────────────────────────────────────────────────────
      let frame=0;
      const animate=()=>{
        if(destroyed)return;
        rafId=requestAnimationFrame(animate);
        frame++;

        scrollTarget=window.scrollY;
        scrollCurrent+=(scrollTarget-scrollCurrent)*LERP;
        const scrollRange=Math.max(1,document.body.scrollHeight-window.innerHeight);
        const progress=clamp(scrollCurrent/scrollRange,0,1);

        const scrollDelta=scrollCurrent-prevScroll;
        const scrollVel=Math.abs(scrollDelta);
        prevScroll=scrollCurrent;

        chromaPass.uniforms.amount.value=BASE_CHROMA+scrollVel*0.00028;
        if(progressBar)progressBar.style.width=(progress*100).toFixed(3)+"%";

        // Scroll spin accumulator
        scrollSpin+=scrollDelta*3.5;
        scrollSpin*=0.82;

        // ── Panel spin pass ──────────────────────────────────────────────────────
        // Panels tilt with scroll velocity — layered on top of the reveal tilt
        for(const{el}of panelItems){
          const ry=parseFloat(el.dataset.pry??"0");
          const rx=parseFloat(el.dataset.prx??"0");
          const tz=parseFloat(el.dataset.ptz??"0");
          const spinRx=(scrollSpin*0.3).toFixed(2);
          el.style.transform=`perspective(1200px) rotateY(${ry}deg) rotateX(${(rx+parseFloat(spinRx)).toFixed(2)}deg) translateZ(${tz}px)`;
        }

        // ── Number twirl pass ────────────────────────────────────────────────────
        // Stats numbers spin hard with scroll velocity (futuristic flip effect)
        numEls.forEach((el,i)=>{
          const rx=(scrollSpin*2.8+i*9*Math.sign(scrollDelta||1)).toFixed(2);
          el.style.transform=`perspective(280px) rotateX(${rx}deg)`;
        });

        updateCamera(progress*(camPath.length-1));
        updateHero(progress);
        updatePanels(progress);
        updateCounters(progress);

        smoothX+=(normX-smoothX)*0.048;
        smoothY+=(normY-smoothY)*0.048;

        wrapper.rotation.x+=(smoothY*0.05-wrapper.rotation.x)*0.04;
        wrapper.rotation.z+=(-smoothX*0.05-wrapper.rotation.z)*0.04;

        ribbons.forEach(r=>{r.rotation.y+=r.userData.speed;});
        rings.forEach(r=>{r.rotation.z+=r.userData.speed;});

        pulses.forEach(ring=>{
          const ph=(frame*0.007+ring.userData.phase)%1,sc=2+ph*22;
          ring.scale.set(sc,sc,sc);
          (ring.material as THREE.MeshBasicMaterial).opacity=Math.pow(1-ph,1.5)*0.55;
        });

        orbitLight.position.set(Math.cos(frame*0.008)*12,18+Math.sin(frame*0.005)*14,Math.sin(frame*0.008)*12);

        const aPos=atmo.pos,aVel=atmo.vel,tPos=atmo.tPos,mwx=smoothX*10,mwz=smoothY*6;
        for(let i=0;i<ATMO;i++){
          aVel[i*3]*=0.94;aVel[i*3+1]*=0.97;aVel[i*3+2]*=0.94;
          aVel[i*3+1]+=0.0018;if(aVel[i*3+1]>0.032)aVel[i*3+1]=0.032;
          aPos[i*3]+=aVel[i*3];aPos[i*3+1]+=aVel[i*3+1];aPos[i*3+2]+=aVel[i*3+2];
          aPos[i*3]*=0.9999;aPos[i*3+2]*=0.9999;
          const dx=aPos[i*3]-mwx,dz=aPos[i*3+2]-mwz,d2=dx*dx+dz*dz;
          if(d2<120&&d2>0.01){const d=Math.sqrt(d2),f=((11-d)/11)*0.22;aVel[i*3]+=(dx/d)*f;aVel[i*3+2]+=(dz/d)*f;}
          if(aPos[i*3+1]>64){aPos[i*3+1]=-1+Math.random();aPos[i*3]=(Math.random()-0.5)*60;aPos[i*3+2]=(Math.random()-0.5)*60;aVel[i*3]=(Math.random()-0.5)*0.003;aVel[i*3+1]=0.001+Math.random()*0.004;aVel[i*3+2]=(Math.random()-0.5)*0.003;}
          const spd=Math.sqrt(aVel[i*3]*aVel[i*3]+aVel[i*3+1]*aVel[i*3+1]+aVel[i*3+2]*aVel[i*3+2]);
          const tLen=spd*42;
          tPos[i*6]=aPos[i*3];tPos[i*6+1]=aPos[i*3+1];tPos[i*6+2]=aPos[i*3+2];
          tPos[i*6+3]=aPos[i*3]-(aVel[i*3]/spd)*(tLen||0);
          tPos[i*6+4]=aPos[i*3+1]-(aVel[i*3+1]/spd)*(tLen||0);
          tPos[i*6+5]=aPos[i*3+2]-(aVel[i*3+2]/spd)*(tLen||0);
        }
        atmo.pts.geometry.attributes.position.needsUpdate=true;
        atmo.tGeo.attributes.position.needsUpdate=true;
        const cursorSpd=Math.sqrt(smoothX*smoothX+smoothY*smoothY);
        (atmo.trails.material as THREE.LineBasicMaterial).opacity=0.22+cursorSpd*0.8;

        goldA.intensity=10+Math.sin(frame*0.02)*5;
        goldB.intensity=7+Math.cos(frame*0.015)*3.5;
        apex.intensity=16+Math.sin(frame*0.05)*9;
        tealCore.intensity=5+Math.sin(frame*0.03)*2.5;
        bloom.strength=(isMobile?1.0:2.0)+Math.sin(frame*0.01)*0.2;
        stars.rotation.y=frame*0.00004;

        composer.render();
      };

      animate();

      return()=>{
        window.removeEventListener("mousemove",onMouse);
        window.removeEventListener("touchmove",onTouch);
        window.removeEventListener("resize",onResize);
        renderer.dispose();composer.dispose();
      };
    };

    const cleanup=init();
    return()=>{destroyed=true;cancelAnimationFrame(rafId);if(cleanup)cleanup();};
  },[]);

  // Shared glass panel style
  const PANEL:React.CSSProperties={
    position:"relative",
    background:"rgba(6,14,28,0.82)",
    backdropFilter:"blur(24px) saturate(1.1)",
    WebkitBackdropFilter:"blur(24px) saturate(1.1)",
    border:"1px solid rgba(201,168,76,0.22)",
    borderRadius:"18px",
    padding:"clamp(2rem,4vw,3.5rem) clamp(2rem,5vw,4rem)",
    boxShadow:"0 0 80px rgba(201,168,76,0.07), 0 0 160px rgba(201,168,76,0.03), inset 0 1px 0 rgba(255,255,255,0.05)",
    willChange:"transform,opacity",
    opacity:0,
  };

  const LABEL:React.CSSProperties={
    fontFamily:"'Space Mono',monospace",
    fontSize:"0.62rem",
    letterSpacing:"0.32em",
    color:"#C9A84C",
    display:"block",
    marginBottom:"2.5rem",
  };

  const WC:React.CSSProperties={willChange:"transform,opacity"};

  return (
    <>
      <canvas ref={canvasRef} style={{position:"fixed",inset:0,zIndex:0,width:"100vw",height:"100vh",display:"block"}} />

      {/* Gold progress bar */}
      <div id="exp-pb" style={{position:"fixed",top:0,left:0,zIndex:200,height:1,width:"0%",background:"linear-gradient(to right,#C9A84C,#ffe5a0,#C9A84C)",pointerEvents:"none"}} />

      {/* Back */}
      <Link href="/" style={{position:"fixed",top:"1.8rem",left:"2rem",zIndex:100,fontFamily:"'Space Mono',monospace",fontSize:"0.62rem",letterSpacing:"0.2em",color:"rgba(221,232,240,0.5)",transition:"color 0.2s",display:"flex",alignItems:"center",gap:"0.5rem"}}
        onMouseEnter={e=>(e.currentTarget.style.color="rgba(221,232,240,0.9)")}
        onMouseLeave={e=>(e.currentTarget.style.color="rgba(221,232,240,0.5)")}>
        ← JDLO
      </Link>

      {/* 700vh scroll range */}
      <div style={{height:"700vh",position:"relative",pointerEvents:"none"}} />

      {/* ── Hero — JDLO letters scramble in from deep ── */}
      <section style={{position:"fixed",inset:0,zIndex:10,display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"0 0 10vh 7vw",pointerEvents:"none"}}>
        <div style={{display:"flex",lineHeight:0.85,marginBottom:"2.5rem",gap:"0.01em"}}>
          {(["J","D","L","O"] as const).map(char=>(
            <span key={char} id={`h-${char}`} data-final={char} style={{...WC,fontFamily:"'Space Grotesk',sans-serif",fontSize:"clamp(5.5rem,21vw,18rem)",fontWeight:300,letterSpacing:"-0.04em",color:"#C9A84C",opacity:0,display:"inline-block",textShadow:"0 0 60px rgba(201,168,76,0.4)"}}>
              {char}
            </span>
          ))}
        </div>
        <span id="h-sub" style={{...WC,display:"block",fontFamily:"'Space Mono',monospace",fontSize:"0.72rem",letterSpacing:"0.32em",color:"rgba(221,232,240,0.6)",opacity:0,marginBottom:"3rem"}}>
          SYSTEMS · SITES · AI · EXPERIENCES
        </span>
        <div id="h-cue" style={{...WC,position:"absolute",bottom:"6vh",left:"50%",display:"flex",flexDirection:"column",alignItems:"center",gap:"0.8rem",opacity:0,pointerEvents:"none"}}>
          <span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.62rem",letterSpacing:"0.28em",color:"#C9A84C",animation:"xblink 2.5s ease-in-out infinite"}}>SCROLL</span>
          <div style={{width:1,height:44,background:"linear-gradient(to bottom,#C9A84C,transparent)",animation:"xdrip 2.5s ease-in-out infinite"}} />
        </div>
      </section>

      {/* ── Stats Panel — glass sign flies out from the left ── */}
      <section style={{position:"fixed",inset:0,zIndex:10,display:"flex",alignItems:"center",padding:"0 0 0 7vw",pointerEvents:"none"}}>
        <div id="panel-stats" style={{...PANEL,maxWidth:"clamp(400px,55vw,620px)",width:"100%"}}>
          {/* gold glint line across top */}
          <div style={{position:"absolute",top:0,left:"15%",right:"15%",height:1,background:"linear-gradient(to right,transparent,rgba(201,168,76,0.5),transparent)",borderRadius:1}} />

          <span style={LABEL}>01 — BY THE NUMBERS</span>

          {[
            {rowId:"s1-r0",numId:"s1-n0",n:"0+",   label:"Builds shipped"},
            {rowId:"s1-r1",numId:"s1-n1",n:"$0K+",  label:"Value delivered to clients"},
            {rowId:"s1-r2",numId:"s1-n2",n:"0",     label:"Templates ever used"},
          ].map(({rowId,numId,n,label})=>(
            <div key={rowId} id={rowId} style={{borderTop:"1px solid rgba(201,168,76,0.12)",padding:"1.6rem 0",display:"flex",alignItems:"baseline",gap:"2rem"}}>
              <span id={numId} style={{...WC,fontFamily:"'Space Mono',monospace",fontSize:"clamp(2rem,5.5vw,4rem)",fontWeight:700,color:"#C9A84C",letterSpacing:"-0.03em",lineHeight:1,minWidth:"6.5rem",display:"inline-block",textShadow:"0 0 30px rgba(201,168,76,0.35)"}}>
                {n}
              </span>
              <span style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:"clamp(0.85rem,1.8vw,1.15rem)",fontWeight:300,color:"rgba(221,232,240,0.6)",letterSpacing:"-0.01em"}}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Story Panel — glass sign flies out from the right ── */}
      <section style={{position:"fixed",inset:0,zIndex:10,display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 7vw 0 0",pointerEvents:"none"}}>
        <div id="panel-story" style={{...PANEL,maxWidth:"clamp(360px,50vw,560px)",width:"100%"}}>
          <div style={{position:"absolute",top:0,left:"15%",right:"15%",height:1,background:"linear-gradient(to right,transparent,rgba(201,168,76,0.5),transparent)",borderRadius:1}} />

          <span style={LABEL}>02 — WHO I AM</span>

          {[
            {id:"sl-0",text:"Self-taught."},
            {id:"sl-1",text:"Self-made."},
            {id:"sl-2",text:"No shortcuts."},
          ].map(({id,text})=>(
            <span key={id} id={id} style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:"clamp(1.8rem,4vw,3.2rem)",fontWeight:300,letterSpacing:"-0.03em",lineHeight:1.1,color:"#dde8f0",display:"block",marginBottom:"0.05em"}}>
              {text}
            </span>
          ))}

          <p style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:"0.9rem",lineHeight:1.85,color:"rgba(221,232,240,0.45)",fontWeight:300,marginTop:"1.8rem",marginBottom:"2rem"}}>
            Learned the entire modern stack in under a year.
            Built casinos, enterprise tools, AI systems, and games
            for businesses from local shops to six-figure operations.
            I move fast, build clean, and don&apos;t use templates.
          </p>
          <a href="/work" style={{display:"inline-flex",alignItems:"center",gap:"0.6rem",fontFamily:"'Space Mono',monospace",fontSize:"0.65rem",letterSpacing:"0.2em",color:"#C9A84C",pointerEvents:"all"}}>
            SEE WHAT I&apos;VE BUILT <span>→</span>
          </a>
        </div>
      </section>

      {/* ── CTA Panel — glass sign comes straight out of the scene ── */}
      <section style={{position:"fixed",inset:0,zIndex:10,display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"}}>
        <div id="panel-cta" style={{...PANEL,maxWidth:"clamp(360px,60vw,680px)",width:"100%",textAlign:"center"}}>
          <div style={{position:"absolute",top:0,left:"20%",right:"20%",height:1,background:"linear-gradient(to right,transparent,rgba(201,168,76,0.6),transparent)",borderRadius:1}} />

          <span style={{...LABEL,textAlign:"center"}}>03 — LET&apos;S BUILD</span>

          <div style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:"clamp(2.8rem,7vw,6rem)",fontWeight:300,letterSpacing:"-0.04em",lineHeight:0.92,color:"#dde8f0",marginBottom:"0.1em"}}>
            You bring
          </div>
          <div style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:"clamp(2.8rem,7vw,6rem)",fontWeight:300,letterSpacing:"-0.04em",lineHeight:0.92,color:"rgba(201,168,76,0.7)",marginBottom:"2.5rem"}}>
            the vision.
          </div>

          <div style={{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap",pointerEvents:"all"}}>
            <a href="/contact" style={{fontFamily:"'Space Mono',monospace",fontSize:"0.65rem",letterSpacing:"0.2em",padding:"0.9rem 2.4rem",background:"#C9A84C",border:"1px solid #C9A84C",borderRadius:"100px",color:"#060608",fontWeight:700}}>
              START A PROJECT
            </a>
            <a href="https://instagram.com/jdlo" target="_blank" rel="noopener noreferrer" style={{fontFamily:"'Space Mono',monospace",fontSize:"0.65rem",letterSpacing:"0.2em",padding:"0.9rem 2.4rem",border:"1px solid rgba(221,232,240,0.2)",borderRadius:"100px",color:"rgba(221,232,240,0.7)"}}>
              DM @JDLO
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Space+Grotesk:wght@300;400;500&display=swap');
        @keyframes xblink{0%,100%{opacity:0.3;}50%{opacity:1;}}
        @keyframes xdrip{0%{transform:scaleY(0);transform-origin:top;opacity:0;}30%{transform:scaleY(1);transform-origin:top;opacity:1;}70%{transform:scaleY(1);transform-origin:bottom;opacity:1;}100%{transform:scaleY(0);transform-origin:bottom;opacity:0;}}
        #h-cue{transform:translateX(-50%);}
      `}</style>
    </>
  );
}
