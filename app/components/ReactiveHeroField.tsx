"use client";

import type { CSSProperties } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

type Spark = {
  id: string;
  x: number;
  y: number;
  radius: number;
  bloom: number;
  coreOpacity: number;
  haloOpacity: number;
  delay: number;
  duration: number;
  driftX: number;
  driftY: number;
  driftAltX: number;
  driftAltY: number;
  hotness: number;
};

type AnimatedSpark = Spark & {
  glow: number;
};

type SparkStyle = CSSProperties &
  Record<
    "--drift-x" | "--drift-y" | "--drift-alt-x" | "--drift-alt-y" | "--sparkle-scale",
    string
  >;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const formatSvgNumber = (value: number) => {
  const formatted = value.toFixed(3).replace(/\.?0+$/, "");

  return formatted === "-0" ? "0" : formatted;
};

const createRandom = () => {
  let seed = 42137;

  return () => {
    seed = (seed * 48271) % 2147483647;
    return (seed - 1) / 2147483646;
  };
};

const createGaussian = (random: () => number) => () => {
  const u = 1 - random();
  const v = random();

  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
};

export function ReactiveHeroField() {
  const frame = useRef<number | null>(null);
  const [pointer, setPointer] = useState({ x: 56, y: 48, active: false });

  const sparks = useMemo<Spark[]>(() => {
    const random = createRandom();
    const gaussian = createGaussian(random);
    const items: Spark[] = [];

    const addSpark = (x: number, y: number, hotnessBias = 0) => {
      const hotness = clamp(Math.pow(random(), 2.2) + hotnessBias, 0, 1);
      const radius = 0.22 + hotness * 1.45 + random() * 0.34;
      const driftX = (random() - 0.5) * (2.8 + hotness * 2.4);
      const driftY = (random() - 0.5) * (3.4 + hotness * 2.6);

      items.push({
        id: `spark-${items.length}`,
        x: clamp(x, 3, 97),
        y: clamp(y, 5, 95),
        radius,
        bloom: radius * (2.35 + hotness * 2.45),
        coreOpacity: 0.68 + hotness * 0.3,
        haloOpacity: 0.18 + hotness * 0.28,
        delay: -(random() * 4.6),
        duration: 3.1 + random() * 3.7 + hotness * 1.4,
        driftX,
        driftY,
        driftAltX: driftX * -0.46 + (random() - 0.5) * 1.2,
        driftAltY: driftY * 0.54 + (random() - 0.5) * 1.4,
        hotness,
      });
    };

    const clusters = [
      { x: 16, y: 57, count: 34, spreadX: 12, spreadY: 16, heat: 0.16 },
      { x: 29, y: 36, count: 22, spreadX: 9, spreadY: 12, heat: 0.1 },
      { x: 47, y: 50, count: 28, spreadX: 14, spreadY: 15, heat: 0.06 },
      { x: 63, y: 39, count: 30, spreadX: 12, spreadY: 13, heat: 0.12 },
      { x: 73, y: 63, count: 24, spreadX: 10, spreadY: 12, heat: 0.08 },
      { x: 88, y: 47, count: 26, spreadX: 9, spreadY: 14, heat: 0.14 },
    ];

    clusters.forEach((cluster) => {
      for (let index = 0; index < cluster.count; index += 1) {
        addSpark(
          cluster.x + gaussian() * cluster.spreadX * 0.45,
          cluster.y + gaussian() * cluster.spreadY * 0.45,
          random() < 0.18 ? cluster.heat : 0,
        );
      }
    });

    for (let index = 0; index < 76; index += 1) {
      const progress = index / 75;
      const x = 4 + progress * 92 + (random() - 0.5) * 5.4;
      const y =
        51 +
        Math.sin(progress * Math.PI * 4.2) * 11 +
        Math.sin(progress * Math.PI * 9.1) * 4 +
        (random() - 0.5) * 9;

      addSpark(x, y, random() < 0.08 ? 0.12 : 0);
    }

    for (let index = 0; index < 34; index += 1) {
      addSpark(5 + random() * 90, 12 + random() * 72, random() < 0.12 ? 0.2 : 0);
    }

    return items;
  }, []);

  const animatedSparks = useMemo<AnimatedSpark[]>(
    () =>
      sparks.map((spark) => {
        const dx = spark.x - pointer.x;
        const dy = spark.y - pointer.y;
        const distance = Math.hypot(dx, dy);
        const influence = pointer.active ? clamp(1 - distance / 24, 0, 1) : 0;
        const unitX = distance === 0 ? 0 : dx / distance;
        const unitY = distance === 0 ? 0 : dy / distance;
        const scatter = influence * (1.8 + spark.hotness * 3.6);
        const orbit = influence * (1.2 + spark.hotness * 2);

        return {
          ...spark,
          x: spark.x + unitX * scatter - unitY * orbit,
          y: spark.y + unitY * scatter + unitX * orbit,
          glow: influence,
        };
      }),
    [pointer, sparks],
  );

  useEffect(
    () => () => {
      if (frame.current) {
        cancelAnimationFrame(frame.current);
      }
    },
    [],
  );

  return (
    <div
      className="absolute right-[-2%] top-[-8%] h-[560px] w-[560px] max-w-[51vw] cursor-crosshair select-none"
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
        className="relative h-full w-full overflow-visible drop-shadow-[0_28px_54px_rgba(154,91,12,0.22)]"
        role="presentation"
      >
        <defs>
          <radialGradient id="heroGoldCore">
            <stop offset="0%" stopColor="#fffdf1" />
            <stop offset="42%" stopColor="#ffe08a" />
            <stop offset="100%" stopColor="#f59e0b" />
          </radialGradient>
          <radialGradient id="heroGoldHalo">
            <stop offset="0%" stopColor="#fff7c8" stopOpacity="0.95" />
            <stop offset="38%" stopColor="#ffc44d" stopOpacity="0.46" />
            <stop offset="76%" stopColor="#f97316" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#c2410c" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="heroGoldVeil">
            <stop offset="0%" stopColor="#fed86b" stopOpacity="0.26" />
            <stop offset="58%" stopColor="#fb923c" stopOpacity="0.09" />
            <stop offset="100%" stopColor="#f7f1ea" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="heroGoldPointerGlow">
            <stop offset="0%" stopColor="#fff8d7" stopOpacity="0.76" />
            <stop offset="46%" stopColor="#facc15" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="50" cy="51" rx="50" ry="34" fill="url(#heroGoldVeil)" opacity="0.8" />
        <circle
          cx={pointer.x}
          cy={pointer.y}
          r={pointer.active ? 18 : 7}
          fill="url(#heroGoldPointerGlow)"
          opacity={pointer.active ? 0.72 : 0.14}
          className="hero-gold-pointer"
        />

        <g>
          {animatedSparks.map((spark) => {
            const style = {
              "--drift-x": `${formatSvgNumber(spark.driftX)}px`,
              "--drift-y": `${formatSvgNumber(spark.driftY)}px`,
              "--drift-alt-x": `${formatSvgNumber(spark.driftAltX)}px`,
              "--drift-alt-y": `${formatSvgNumber(spark.driftAltY)}px`,
              "--sparkle-scale": formatSvgNumber(1.02 + spark.hotness * 0.38 + spark.glow * 0.22),
              animationDelay: `${formatSvgNumber(spark.delay)}s`,
              animationDuration: `${formatSvgNumber(spark.duration)}s`,
            } satisfies SparkStyle;

            return (
              <g key={spark.id} className="hero-gold-sparkle" style={style}>
                <circle
                  cx={formatSvgNumber(spark.x)}
                  cy={formatSvgNumber(spark.y)}
                  r={formatSvgNumber(spark.bloom + spark.glow * 1.8)}
                  fill="url(#heroGoldHalo)"
                  opacity={formatSvgNumber(Math.min(0.92, spark.haloOpacity + spark.glow * 0.42))}
                />
                <circle
                  cx={formatSvgNumber(spark.x)}
                  cy={formatSvgNumber(spark.y)}
                  r={formatSvgNumber(spark.radius + spark.glow * 0.5)}
                  fill="url(#heroGoldCore)"
                  opacity={formatSvgNumber(Math.min(1, spark.coreOpacity + spark.glow * 0.2))}
                  className="hero-gold-core"
                />
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
