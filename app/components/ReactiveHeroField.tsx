"use client";

import { useMemo, useRef, useState } from "react";

type Dot = {
  id: string;
  x: number;
  y: number;
  depth: number;
  glow: number;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export function ReactiveHeroField() {
  const frame = useRef<number | null>(null);
  const [pointer, setPointer] = useState({ x: 58, y: 52, active: false });

  const dots = useMemo<Dot[]>(() => {
    const items: Dot[] = [];

    for (let row = 0; row < 18; row += 1) {
      for (let col = 0; col < 27; col += 1) {
        const x = 10 + col * 3.05;
        const wave = Math.sin(col * 0.42) * 9 + Math.cos(row * 0.52) * 4;
        const y = 9 + row * 4.55 + wave;
        const centerDistance = Math.hypot(x - 58, y - 52);

        if (y > 6 && y < 92 && centerDistance < 55) {
          items.push({
            id: `${row}-${col}`,
            x,
            y,
            depth: 1 - clamp(centerDistance / 58, 0, 1),
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
        const influence = pointer.active ? clamp(1 - distance / 34, 0, 1) : 0;
        const swirl = influence * 7;
        const pull = influence * 4.4;

        return {
          ...dot,
          x: dot.x + dx * 0.11 * pull - dy * 0.055 * swirl,
          y: dot.y + dy * 0.11 * pull + dx * 0.055 * swirl,
          glow: influence,
        };
      }),
    [dots, pointer],
  );

  const lineSegments = useMemo(() => {
    const segments: Array<[Dot, Dot]> = [];
    for (let index = 0; index < warpedDots.length - 1; index += 1) {
      const current = warpedDots[index];
      const next = warpedDots[index + 1];
      if (Math.abs(current.y - next.y) < 8 && index % 3 === 0) {
        segments.push([current, next]);
      }
    }
    return segments;
  }, [warpedDots]);

  return (
    <div
      className="absolute right-[1%] top-[-2%] h-[520px] w-[620px] max-w-[54vw] cursor-crosshair select-none"
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
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_60%_52%,rgba(255,194,130,0.24),rgba(255,244,231,0.10)_35%,transparent_67%)] blur-sm" />
      <svg
        viewBox="0 0 100 100"
        className="relative h-full w-full overflow-visible drop-shadow-[0_18px_50px_rgba(201,87,32,0.26)]"
        role="presentation"
      >
        <defs>
          <radialGradient id="heroPointerGlow">
            <stop offset="0%" stopColor="#fff8eb" stopOpacity="1" />
            <stop offset="46%" stopColor="#f7b267" stopOpacity="0.72" />
            <stop offset="100%" stopColor="#c95720" stopOpacity="0" />
          </radialGradient>
          <filter id="dotGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="0.55" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle
          cx={pointer.x}
          cy={pointer.y}
          r={pointer.active ? 12 : 8}
          fill="url(#heroPointerGlow)"
          opacity={pointer.active ? 0.46 : 0.22}
          className="transition-[r,opacity] duration-300"
        />

        <g stroke="#f0b26e" strokeLinecap="round">
          {lineSegments.map(([from, to]) => (
            <line
              key={`${from.id}-${to.id}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              strokeWidth={0.1 + Math.max(from.glow, to.glow) * 0.22}
              opacity={0.08 + Math.max(from.depth, to.depth) * 0.18 + Math.max(from.glow, to.glow) * 0.42}
            />
          ))}
        </g>

        <g filter="url(#dotGlow)">
          {warpedDots.map((dot) => (
            <circle
              key={dot.id}
              cx={dot.x}
              cy={dot.y}
              r={0.25 + dot.depth * 0.18 + dot.glow * 0.32}
              fill={dot.glow > 0.18 ? "#fff5df" : "#ffe0b5"}
              opacity={0.52 + dot.depth * 0.28 + dot.glow * 0.2}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
