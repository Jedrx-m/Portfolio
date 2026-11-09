import React, { useEffect, useRef } from 'react';

interface CyberHorizonCanvasProps {
  className?: string;
}

export const CyberHorizonCanvas: React.FC<CyberHorizonCanvasProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Starfield particles in upper sky
    const numStars = 65;
    const stars = Array.from({ length: numStars }, () => ({
      x: Math.random() * width,
      y: Math.random() * (height * 0.55),
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.7 + 0.3,
      speed: Math.random() * 0.02 + 0.005,
    }));

    let gridOffset = 0;
    const gridSpeed = 0.7; // Smooth speed of moving forward

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const render = () => {
      // Clear canvas with deep midnight black/blue gradient
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, width, height);

      const horizonY = height * 0.48;

      // 1. Draw atmospheric blue horizon glow
      const horizonGlow = ctx.createRadialGradient(
        width / 2,
        horizonY,
        10,
        width / 2,
        horizonY,
        width * 0.65
      );
      horizonGlow.addColorStop(0, 'rgba(6, 182, 212, 0.22)');
      horizonGlow.addColorStop(0.3, 'rgba(37, 99, 235, 0.14)');
      horizonGlow.addColorStop(0.7, 'rgba(15, 23, 42, 0.05)');
      horizonGlow.addColorStop(1, 'transparent');

      ctx.fillStyle = horizonGlow;
      ctx.fillRect(0, 0, width, height);

      // 2. Render drifting blue stars
      for (const star of stars) {
        star.alpha += Math.sin(Date.now() * star.speed) * 0.01;
        ctx.fillStyle = `rgba(186, 230, 253, ${Math.max(0.15, Math.min(0.9, star.alpha))})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Render 3D Perspective Moving Grid (Bluish Synthwave Plane)
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, horizonY, width, height - horizonY);
      ctx.clip();

      gridOffset = (gridOffset + gridSpeed) % 40;

      // Draw horizontal lines moving forward with exponential perspective spacing
      const numHorizLines = 22;
      for (let i = 0; i < numHorizLines; i++) {
        // Perspective distribution from horizon down to bottom
        const p = Math.pow((i + gridOffset / 40) / numHorizLines, 2.2);
        const y = horizonY + p * (height - horizonY);
        const alpha = Math.min(1, p * 1.2);

        ctx.strokeStyle = `rgba(6, 182, 212, ${alpha * 0.42})`;
        ctx.lineWidth = 1 + p * 1.2;

        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw perspective vanishing lines radiating from center vanishing point
      const vanishingX = width / 2;
      const vanishingY = horizonY;
      const numVertLines = 32;

      for (let i = -numVertLines; i <= numVertLines; i++) {
        const bottomX = vanishingX + (i * width) / (numVertLines * 0.42);

        ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
        ctx.lineWidth = 1;

        ctx.beginPath();
        ctx.moveTo(vanishingX, vanishingY);
        ctx.lineTo(bottomX, height);
        ctx.stroke();
      }

      ctx.restore();

      // 4. Crisp glowing horizon separator line
      const horizonLine = ctx.createLinearGradient(0, 0, width, 0);
      horizonLine.addColorStop(0, 'transparent');
      horizonLine.addColorStop(0.2, 'rgba(6, 182, 212, 0.4)');
      horizonLine.addColorStop(0.5, 'rgba(147, 197, 253, 0.9)');
      horizonLine.addColorStop(0.8, 'rgba(6, 182, 212, 0.4)');
      horizonLine.addColorStop(1, 'transparent');

      ctx.strokeStyle = horizonLine;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, horizonY);
      ctx.lineTo(width, horizonY);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      aria-hidden="true"
    />
  );
};
