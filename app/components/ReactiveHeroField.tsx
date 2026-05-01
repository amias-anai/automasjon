"use client";

import { useMemo, useRef, useState } from "react";

type Dot = {
  id: string;
  x: number;
  y: number;
  radius: number;
  opacity: number;
  delay: number;
  duration: number;
  glow: number;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export function ReactiveHeroField() {
  const frame = useRef<number | null>(null);
  const [pointer, setPointer] = useState({ x: 58, y: 52, active: false });

  const dots = useMemo<Dot[]>(() => {
    const items: Dot[] = [];
    const centerX = 50;
    const centerY = 50;
    const fieldRadius = 45.5;

    for (let row = 0; row < 21; row += 1) {
      const y = 4.4 + row * 4.55;
      const rowOffset = row % 2 === 0 ? 0 : 2.18;

      for (let col = 0; col < 22; col += 1) {
        const x = 5.2 + col * 4.35 + rowOffset;
        const centerDistance = Math.hypot(x - centerX, y - centerY);
        const edge = clamp(centerDistance / fieldRadius, 0, 1);

        if (centerDistance <= fieldRadius) {
          items.push({
            id: `${row}-${col}`,
            x,
            y,
            radius: 0.16 + Math.pow(edge, 1.7) * 1.48,
            opacity: 0.24 + Math.pow(edge, 1.18) * 0.7,
            delay: -((row * 0.19 + col * 0.13 + edge * 1.8) % 3.4),
            duration: 2.25 + ((row + col) % 6) * 0.18 + edge * 0.56,
            glow: 0,
          });
        }
      }
    }

    return items;
  }, []);

  const warpedDots = useMemo(
    () =>
      dots.map((dot) => {
        const dx = pointer.x - dot.x;
        const dy = pointer.y - dot.y;
        const distance = Math.hypot(dx, dy);
        const influence = pointer.active ? clamp(1 - distance / 28, 0, 1) : 0;
        const swirl = influence * 3.2;
        const pull = influence * 2.1;

        return {
          ...dot,
          x: dot.x + dx * 0.045 * pull - dy * 0.035 * swirl,
          y: dot.y + dy * 0.045 * pull + dx * 0.035 * swirl,
          glow: influence,
        };
      }),
    [dots, pointer],
  );

  return (
    <div
      className="absolute right-[5%] top-[2%] h-[500px] w-[500px] max-w-[46vw] cursor-crosshair select-none"
      aria-hidden="true"
      onPointerEnter={() => setPointer((current) => ({ ...current, active: true }))}
      onPointerLeave={() => setPointer((current) => ({ ...current, active: false }))}
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width) * 100;
        const y = ((event.clientY - bounds.top) / bounds.height) * 100;

        if (frame.current) {
          cancelAnimationFrame(frame.current);
        }

        frame.current = requestAnimationFrame(() => {
          setPointer({
            x: clamp(x, 0, 100),
            y: clamp(y, 0, 100),
            active: true,
          });
        });
      }}
    >
      <svg
        viewBox="0 0 100 100"
        className="relative h-full w-full overflow-visible drop-shadow-[0_20px_44px_rgba(15,45,66,0.16)]"
        role="presentation"
      >
        <defs>
          <radialGradient id="heroPointerGlow">
            <stop offset="0%" stopColor="#fffaf4" stopOpacity="0.92" />
            <stop offset="52%" stopColor="#f7b267" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#c95720" stopOpacity="0" />
          </radialGradient>
          <filter id="heroDotGlow" x="-70%" y="-70%" width="240%" height="240%">
            <feGaussianBlur stdDeviation="0.22" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle
          cx={pointer.x}
          cy={pointer.y}
          r={pointer.active ? 13 : 6}
          fill="url(#heroPointerGlow)"
          opacity={pointer.active ? 0.44 : 0.12}
          className="transition-[r,opacity] duration-300"
        />

        <g filter="url(#heroDotGlow)">
          {warpedDots.map((dot) => (
            <circle
              key={dot.id}
              cx={dot.x}
              cy={dot.y}
              r={dot.radius + dot.glow * 0.42}
              fill={dot.glow > 0.12 ? "#c95720" : "#090a1d"}
              opacity={Math.min(1, dot.opacity + dot.glow * 0.22)}
              className="hero-halftone-dot"
              style={{
                animationDelay: `${dot.delay}s`,
                animationDuration: `${dot.duration}s`,
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
