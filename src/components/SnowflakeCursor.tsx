'use client';

import React, { useRef, useEffect } from 'react';

const SnowflakeCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<any[]>([]);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    mouse.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      mouse.current = { x: canvas.width / 2, y: canvas.height / 2 };
    };

    const createParticles = (count: number) => {
      for (let i = 0; i < count; i++) {
        particles.current.push({
          x: mouse.current.x,
          y: mouse.current.y,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2 + 1, // Tend to fall down
          size: Math.random() * 3 + 1,
          life: 100,
        });
      }
    };

    const mousemove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      createParticles(2);
    };

    const draw = (p: any) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.life / 100})`;
        ctx.fill();
    };

    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current = particles.current.filter(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 1;
        return p.life > 0;
      });

      particles.current.forEach(p => draw(p));

      animationFrameId = requestAnimationFrame(update);
    };
    
    resize();
    update();

    window.addEventListener("resize", resize);
    document.addEventListener("mousemove", mousemove);

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", mousemove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 10000,
      }}
    />
  );
};

export default SnowflakeCursor;
