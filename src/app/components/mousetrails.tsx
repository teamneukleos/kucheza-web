"use client";

import { useEffect, useRef } from "react";

type RGB = {
  r: number;
  g: number;
  b: number;
};

// Kucheza brand colors
const HEAD: RGB = {
  r: 255,
  g: 45,
  b: 110,
}; // #FF2D6E

const BODY: RGB = {
  r: 82,
  g: 215,
  b: 255,
}; // #52D7FF

const TAIL: RGB = {
  r: 36,
  g: 242,
  b: 190,
}; // #24F2BE

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function lerpColor(c1: RGB, c2: RGB, c3: RGB, t: number) {
  const r = lerp(lerp(c1.r, c2.r, t), lerp(c2.r, c3.r, t), t);
  const g = lerp(lerp(c1.g, c2.g, t), lerp(c2.g, c3.g, t), t);
  const b = lerp(lerp(c1.b, c2.b, t), lerp(c2.b, c3.b, t), t);

  return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
}

const OPTIONS = {
  points: 60,
  headWidth: 40,
  tailWidth: 30,
  lerp: 0.1,
};

export default function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const canvasElement: HTMLCanvasElement = canvas;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Keep a non-null reference for TypeScript
    const context = ctx;

    const win = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const mouse = {
      x: win.width / 2,
      y: win.height / 2,
      lerpX: win.width / 2,
      lerpY: win.height / 2,
    };

    let frameId = 0;
    const trail: { x: number; y: number }[] = [];
    const colors: string[] = [];

    // Build gradient once
    for (let i = 0; i < OPTIONS.points; i++) {
      const t = i / OPTIONS.points;
      colors.push(lerpColor(HEAD, BODY, TAIL, t));
    }

    function resize() {
      win.width = window.innerWidth;
      win.height = window.innerHeight;

      canvasElement.width = win.width;
      canvasElement.height = win.height;
    }

    function mouseMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function draw() {
      context.clearRect(0, 0, win.width, win.height);

      mouse.lerpX = lerp(mouse.lerpX, mouse.x, OPTIONS.lerp);
      mouse.lerpY = lerp(mouse.lerpY, mouse.y, OPTIONS.lerp);

      trail.unshift({
        x: mouse.lerpX,
        y: mouse.lerpY,
      });

      if (trail.length > OPTIONS.points + 2) {
        trail.pop();
      }

      context.lineCap = "round";
      context.lineJoin = "round";

      for (let i = 0; i < trail.length - 1; i++) {
        const current = trail[i];
        const next = trail[i + 1];

        if (!current || !next) continue;

        context.beginPath();

        context.lineWidth = lerp(
          OPTIONS.headWidth,
          OPTIONS.tailWidth,
          i / OPTIONS.points
        );

        context.strokeStyle = colors[i] ?? colors[colors.length - 1];

        context.moveTo(current.x, current.y);
        context.lineTo(next.x, next.y);
        context.stroke();
      }

      frameId = requestAnimationFrame(draw);
    }

    resize();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", mouseMove);

    draw();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="mouse-canvas"
      className="pointer-events-none fixed left-0 top-0 z-[100] h-screen w-screen blur-[4px] max-md:hidden"
    />
  );
}