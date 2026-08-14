import { Route, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import topCar from "@/assets/top-down-red-sports-car.png";

const W = 1200;
const H = 850;
const CX = 600;
const CY = -180;
const R = 800;
const START = 41.4;
const END = 138.6;
const TICKS = Array.from({ length: 61 }, (_, index) => START + ((END - START) * index) / 60);

const items = [
  { num: "01", label: "о нас", href: "#about", angle: 127 },
  { num: "02", label: "доставка по России", href: "#delivery", angle: 108.5 },
  { num: "03", label: "отзывы", href: "#reviews", angle: 90 },
  { num: "04", label: "вопросы и ответы", href: "#faq", angle: 71.5 },
  { num: "05", label: "контакты", href: "#contacts", angle: 53 },
];

function polar(angleDeg: number, radius: number) {
  const angle = (angleDeg * Math.PI) / 180;
  return { x: CX + radius * Math.cos(angle), y: CY + radius * Math.sin(angle) };
}

const left = polar(END, R);
const right = polar(START, R);
const arcPath = `M${left.x.toFixed(1)} ${left.y.toFixed(1)} A${R} ${R} 0 0 0 ${right.x.toFixed(1)} ${right.y.toFixed(1)}`;

export function ArcDial() {
  const ref = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
        setRotation((progress - 0.5) * 7);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className="roadster-stage relative w-full overflow-hidden" style={{ aspectRatio: `${W} / ${H}` }}>
      <h1 className="roadster-title-in absolute inset-x-0 top-[calc(3.5rem+3%)] z-30 text-center text-[clamp(1.7rem,5.2vw,4.6rem)] font-extrabold uppercase leading-none text-foreground drop-shadow-[0_6px_24px_rgba(0,0,0,0.55)]">
        ТОЯМА АВТО
      </h1>

      <div className="roadster-sub-in absolute inset-x-[18%] top-[calc(3.5rem+9%)] z-30 text-center">
        <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-foreground/90 md:text-sm">
          Автомобили с аукционов под ключ
        </p>
      </div>

      <div className="roadster-car-arrival absolute left-1/2 top-[38%] z-20 aspect-[3/2] w-[70%] md:w-[62%]">
        <img
          src={topCar}
          alt="Красный спортивный автомобиль, вид строго сверху"
          width={1024}
          height={1536}
          className="roadster-car-image object-contain drop-shadow-2xl"
        />
        <div className="roadster-headlight roadster-headlight-top" />
        <div className="roadster-headlight roadster-headlight-bottom" />
      </div>


      <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 z-40 size-full" aria-hidden>
        <defs>
          <filter id="arc-glow" filterUnits="userSpaceOnUse" x="-100" y="-100" width={W + 200} height={H + 200}>
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="panel-shade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--color-card)" />
            <stop offset="1" stopColor="var(--color-background)" />
          </linearGradient>
        </defs>

        <path d={`${arcPath} L${W} ${H} L0 ${H} Z`} fill="url(#panel-shade)" />

        <g filter="url(#arc-glow)">
          <path d={arcPath} fill="none" stroke="var(--color-primary)" strokeWidth="4" strokeLinecap="round" />
        </g>
        <path d={arcPath} fill="none" stroke="var(--color-primary-foreground)" strokeOpacity=".95" strokeWidth="1.1" strokeLinecap="round" />

        <g style={{ transform: `rotate(${rotation}deg)`, transformOrigin: `${CX}px ${CY}px`, transition: "transform 200ms linear" }}>
          <path
            d={TICKS.map((angle, index) => {
              const major = index % 5 === 0;
              const inner = polar(angle, R - (major ? 16 : 9));
              const outer = polar(angle, R - 3);
              return `M${inner.x.toFixed(1)} ${inner.y.toFixed(1)}L${outer.x.toFixed(1)} ${outer.y.toFixed(1)}`;
            }).join(" ")}
            fill="none"
            stroke="var(--color-primary-foreground)"
            strokeOpacity=".55"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        </g>

        {items.map((item) => {
          const point = polar(item.angle, R);
          return (
            <circle
              key={`marker-${item.num}`}
              cx={point.x}
              cy={point.y}
              r="4"
              fill="var(--color-primary-foreground)"
              stroke="var(--color-primary)"
              strokeWidth="2.5"
            />
          );
        })}

        <path d={`M600 640 L600 ${H}`} stroke="var(--color-border)" strokeWidth="1" />
        <path d={`M205 445 L60 ${H}`} stroke="var(--color-border)" strokeWidth="1" />
        <path d={`M995 445 L1140 ${H}`} stroke="var(--color-border)" strokeWidth="1" />
      </svg>

      {items.map((item, index) => {
        const point = polar(item.angle, R - 62);
        return (
          <a
            key={item.num}
            href={item.href}
            className="roadster-nav-in group absolute z-50 w-[16%] -translate-x-1/2 -translate-y-1/2 text-center"
            style={{
              left: `${(point.x / W) * 100}%`,
              top: `${(point.y / H) * 100}%`,
              animationDelay: `${0.8 + index * 0.12}s`,
            }}
          >
            <span className="block text-xs font-extrabold tracking-wide text-foreground md:text-2xl">{item.num}</span>
            <span className="mt-1 block text-[6px] font-medium uppercase leading-tight tracking-[0.14em] text-foreground/70 transition-colors group-hover:text-foreground md:text-[10px]">
              {item.label}
            </span>
          </a>
        );
      })}

      <a
        href="#about"
        className="roadster-pedal roadster-nav-in group absolute bottom-[6%] left-[4%] z-50 flex w-[38%] items-center gap-2 px-4 py-3 text-left md:gap-3 md:px-7 md:py-6"
        style={{ animationDelay: "1.5s" }}
      >
        <Sparkles className="size-4 shrink-0 text-primary md:size-7" />
        <span className="text-[10px] font-bold leading-tight md:text-xl">
          Преимущества работы с ТОЯМА АВТО
        </span>
      </a>
      <a
        href="#scheme"
        className="roadster-pedal roadster-nav-in group absolute bottom-[6%] right-[4%] z-50 flex w-[38%] items-center justify-end gap-2 px-4 py-3 text-right md:gap-3 md:px-7 md:py-6"
        style={{ animationDelay: "1.5s" }}
      >
        <span className="text-[10px] font-bold leading-tight md:text-xl">
          Схема покупки автомобиля с нами
        </span>
        <Route className="size-4 shrink-0 text-primary md:size-7" />
      </a>

    </div>
  );
}
