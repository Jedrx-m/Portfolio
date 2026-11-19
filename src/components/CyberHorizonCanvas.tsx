import React, { useEffect, useRef, useState } from 'react';

interface CyberHorizonCanvasProps {
  className?: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number; // radians
  alpha: number;
  active: boolean;
  wait: number; // frames to wait before re-triggering
  color: 'cyan' | 'blue' | 'emerald';
}

export const CyberHorizonCanvas: React.FC<CyberHorizonCanvasProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(preference.matches);
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // 1. Static Twinkling Starfield in upper deep sky
    const numStars = 85;
    const stars = Array.from({ length: numStars }, () => ({
      x: Math.random() * width,
      y: Math.random() * (height * 0.52),
      size: Math.random() * 1.5 + 0.4,
      baseAlpha: Math.random() * 0.6 + 0.3,
      alpha: Math.random() * 0.6 + 0.3,
      speed: Math.random() * 0.03 + 0.008,
      color: Math.random() > 0.4 ? 'rgba(186, 230, 253,' : 'rgba(167, 243, 208,',
    }));

    // 2. Rare, distant, gentle Shooting Star (Deep Cosmic Background)
    const createDistantShootingStar = (initialWait: number): ShootingStar => {
      const colors: ('cyan' | 'blue' | 'emerald')[] = ['cyan', 'blue', 'emerald'];
      return {
        x: Math.random() * (width * 0.7) + width * 0.1,
        y: Math.random() * (height * 0.16) + 12, // High up in the deep night sky
        length: Math.random() * 30 + 45, // Slender, delicate tail
        speed: Math.random() * 1.4 + 2.5, // Slow, peaceful, graceful glide
        angle: (Math.random() * 12 + 22) * (Math.PI / 180), // Subtle gentle 22°-34° angle
        alpha: 0.65,
        active: false,
        wait: initialWait,
        color: colors[Math.floor(Math.random() * colors.length)] ?? 'cyan',
      };
    };

    // Only 1 distant, occasional shooting star with generous quiet intervals
    const shootingStars: ShootingStar[] = [
      createDistantShootingStar(280), // First appearance after ~4.5 seconds
    ];

    let gridOffset = 0;
    const gridSpeed = 0.7; // Speed of moving 3D grid

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      if (reducedMotion) render();
    };

    window.addEventListener('resize', handleResize);

    const render = () => {
      // Clear canvas with deep midnight black/blue gradient
      ctx.fillStyle = '#0a0a0d';
      ctx.fillRect(0, 0, width, height);

      const horizonY = height * 0.48;

      // 1. Draw atmospheric blue horizon glow
      const horizonGlow = ctx.createRadialGradient(
        width / 2,
        horizonY,
        15,
        width / 2,
        horizonY,
        width * 0.65
      );
      horizonGlow.addColorStop(0, 'rgba(6, 182, 212, 0.22)');
      horizonGlow.addColorStop(0.35, 'rgba(37, 99, 235, 0.12)');
      horizonGlow.addColorStop(0.7, 'rgba(15, 23, 42, 0.04)');
      horizonGlow.addColorStop(1, 'transparent');

      ctx.fillStyle = horizonGlow;
      ctx.fillRect(0, 0, width, height);

      // 2. Render background twinkling stars
      for (const star of stars) {
        star.alpha = star.baseAlpha + Math.sin(Date.now() * star.speed) * 0.25;
        const clampedAlpha = Math.max(0.15, Math.min(0.95, star.alpha));
        ctx.fillStyle = `${star.color} ${clampedAlpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Render and animate Distant, Gentle Shooting Star
      for (const meteor of shootingStars) {
        if (!meteor.active) {
          meteor.wait--;
          if (meteor.wait <= 0) {
            meteor.active = true;
            // Spawn far away in the upper sky
            meteor.x = Math.random() * (width * 0.6) + width * 0.15;
            meteor.y = Math.random() * (height * 0.14) + 15;
            meteor.alpha = 0.65; // Soft distant intensity
            meteor.speed = Math.random() * 1.2 + 2.4; // Graceful speed
            meteor.length = Math.random() * 25 + 45; // Slender distant trail
          }
        } else {
          // Subtle movement vector
          const vx = Math.cos(meteor.angle) * meteor.speed;
          const vy = Math.sin(meteor.angle) * meteor.speed;

          meteor.x += vx;
          meteor.y += vy;
          meteor.alpha -= 0.006; // Slow, peaceful fadeout

          // Distant tail start coordinates
          const tailX = meteor.x - Math.cos(meteor.angle) * meteor.length;
          const tailY = meteor.y - Math.sin(meteor.angle) * meteor.length;

          // Distant trail gradient (hairline delicate)
          const trailGrad = ctx.createLinearGradient(tailX, tailY, meteor.x, meteor.y);
          trailGrad.addColorStop(0, 'transparent');

          if (meteor.color === 'cyan') {
            trailGrad.addColorStop(0.5, `rgba(6, 182, 212, ${meteor.alpha * 0.2})`);
            trailGrad.addColorStop(0.85, `rgba(103, 232, 249, ${meteor.alpha * 0.5})`);
            trailGrad.addColorStop(1, `rgba(255, 255, 255, ${meteor.alpha * 0.75})`);
          } else if (meteor.color === 'emerald') {
            trailGrad.addColorStop(0.5, `rgba(0, 255, 170, ${meteor.alpha * 0.2})`);
            trailGrad.addColorStop(0.85, `rgba(52, 211, 153, ${meteor.alpha * 0.5})`);
            trailGrad.addColorStop(1, `rgba(255, 255, 255, ${meteor.alpha * 0.75})`);
          } else {
            trailGrad.addColorStop(0.5, `rgba(59, 130, 246, ${meteor.alpha * 0.2})`);
            trailGrad.addColorStop(0.85, `rgba(147, 197, 253, ${meteor.alpha * 0.5})`);
            trailGrad.addColorStop(1, `rgba(255, 255, 255, ${meteor.alpha * 0.75})`);
          }

          // Draw delicate hairline streak
          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(meteor.x, meteor.y);
          ctx.strokeStyle = trailGrad;
          ctx.lineWidth = 0.9; // Delicate distant hairline
          ctx.stroke();

          // Tiny glowing distant head
          ctx.beginPath();
          ctx.arc(meteor.x, meteor.y, 1.0, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${meteor.alpha * 0.85})`;
          ctx.shadowColor = meteor.color === 'emerald' ? '#00ffaa' : '#22d3ee';
          ctx.shadowBlur = 4;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Check if it finished streak
          if (meteor.alpha <= 0 || meteor.x > width + 50 || meteor.y > height * 0.3) {
            meteor.active = false;
            // Rare interval: wait 450 to 750 frames (~7.5 to 12.5 seconds) between streaks
            meteor.wait = Math.floor(Math.random() * 300 + 450);
          }
        }
      }

      // 4. Render 3D Perspective Moving Grid (Bluish Synthwave Plane)
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, horizonY, width, height - horizonY);
      ctx.clip();

      gridOffset = (gridOffset + gridSpeed) % 40;

      // Draw horizontal lines moving forward with exponential perspective spacing
      const numHorizLines = 22;
      for (let i = 0; i < numHorizLines; i++) {
        const p = Math.pow((i + gridOffset / 40) / numHorizLines, 2.2);
        const y = horizonY + p * (height - horizonY);
        const alpha = Math.min(1, p * 1.2);

        ctx.strokeStyle = `rgba(6, 182, 212, ${alpha * 0.38})`;
        ctx.lineWidth = 1 + p * 1.1;

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

        ctx.strokeStyle = 'rgba(56, 189, 248, 0.22)';
        ctx.lineWidth = 1;

        ctx.beginPath();
        ctx.moveTo(vanishingX, vanishingY);
        ctx.lineTo(bottomX, height);
        ctx.stroke();
      }

      ctx.restore();

      // 5. Crisp glowing horizon separator line
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

      if (!reducedMotion) animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      aria-hidden="true"
    />
  );
};
