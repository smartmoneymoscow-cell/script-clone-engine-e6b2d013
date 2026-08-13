import { useEffect, useRef, useState } from "react";

import topCar from "@/assets/top-down-red-sports-car.png";

const W = 1200;
const H = 850;
const CX = 600;
const CY = -180;
const R = 800;
const START = 41.4;
const END = 138.6;
const TICKS = Array.from({ length: 49 }, (_, index) => START + ((END - START) * index) / 48);

const items = [
  { num: "01", label: "о нас", href: "#about", angle: 132 },
  { num: "02", label: "доставка по России", href: "#delivery", angle: 111 },
  { num: "03", label: "отзывы", href: "#reviews", angle: 90 },
  { num: "04", label: "вопросы и ответы", href: "#faq", angle: 69 },
  { num: "05", label: "контакты", href: "#contacts", angle: 48 },
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
        setRotation((progress - 0.5) * 9);
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
    <div ref={ref} className="roadster-stage relative mx-auto w-full overflow-hidden" style={{ aspectRatio: `${W} / ${H}` }}>
      <h1 className="absolute inset-x-0 top-[7%] z-10 text-center text-[clamp(1.75rem,8.4vw,7rem)] font-extrabold uppercase leading-none text-foreground/90">
        ТОЯМА АВТО
      </h1>

      <img
        src={topCar}
        alt="Красный спортивный автомобиль, вид строго сверху"
        width={1024}
        height={1536}
        className="absolute left-1/2 top-[27%] z-20 w-[45%] -translate-x-1/2 -translate-y-1/2 rotate-90 drop-shadow-2xl md:w-[42%]"
      />

      <div className="absolute inset-x-[24%] top-[42%] z-30 text-center">
        <p className="text-[8px] font-bold uppercase text-foreground md:text-sm">Автомобили с аукционов под ключ</p>
        <p className="mx-auto mt-1 max-w-md text-[6px] leading-relaxed text-foreground/65 md:text-[11px]">
          Экономия до 500 000 ₽ · покупка и доставка во Владивосток за 45 дней
        </p>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 z-40 size-full" aria-hidden>
        <defs>
          <filter id="arc-glow" x="-20%" y="-30%" width="140%" height="160%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <linearGradient id="panel-shade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--color-card)" />
            <stop offset="1" stopColor="var(--color-background)" />
          </linearGradient>
        </defs>

        <path d={`${arcPath} L${W} ${H} L0 ${H} Z`} fill="url(#panel-shade)" />
        <path d={arcPath} fill="none" stroke="var(--color-primary)" strokeWidth="6" filter="url(#arc-glow)" />
        <path d={arcPath} fill="none" stroke="var(--color-primary-foreground)" strokeOpacity=".9" strokeWidth="1.2" />

        <g style={{ transform: `rotate(${rotation}deg)`, transformOrigin: `${CX}px ${CY}px`, transition: "transform 180ms linear" }}>
          <path
            d={TICKS.map((angle, index) => {
              const medium = index % 4 === 0;
              const inner = polar(angle, R - (medium ? 15 : 8));
              const outer = polar(angle, R - 2);
              return `M${inner.x.toFixed(1)} ${inner.y.toFixed(1)}L${outer.x.toFixed(1)} ${outer.y.toFixed(1)}`;
            }).join(" ")}
            fill="none"
            stroke="var(--color-primary-foreground)"
            strokeOpacity=".7"
            strokeWidth="1.25"
          />
        </g>

        {items.map((item) => {
          const point = polar(item.angle, R);
          return (
            <g key={`marker-${item.num}`}>
              <circle cx={point.x} cy={point.y} r="7" fill="var(--color-primary)" filter="url(#arc-glow)" />
              <circle cx={point.x} cy={point.y} r="2.5" fill="var(--color-primary-foreground)" />
            </g>
          );
        })}

        <path d={`M600 620 L600 ${H}`} stroke="var(--color-border)" strokeWidth="1" />
        <path d={`M185 430 L35 ${H}`} stroke="var(--color-border)" strokeWidth="1" />
        <path d={`M1015 430 L1165 ${H}`} stroke="var(--color-border)" strokeWidth="1" />
      </svg>

      {items.map((item) => {
        const point = polar(item.angle, R - 57);
        return (
          <a
            key={item.num}
            href={item.href}
            className="group absolute z-50 w-[19%] -translate-x-1/2 -translate-y-1/2 text-center"
            style={{ left: `${(point.x / W) * 100}%`, top: `${(point.y / H) * 100}%` }}
          >
            <span className="block text-xs font-extrabold text-foreground md:text-xl">{item.num}</span>
            <span className="mt-1 block text-[7px] font-semibold uppercase leading-tight text-foreground/80 transition-colors group-hover:text-foreground md:text-xs">{item.label}</span>
          </a>
        );
      })}

      <a href="#about" className="absolute bottom-[7%] left-[5%] z-50 w-[37%] text-[10px] font-bold leading-tight md:text-2xl">
        Преимущества работы с ТОЯМА АВТО
      </a>
      <a href="#scheme" className="absolute bottom-[7%] right-[5%] z-50 w-[37%] text-right text-[10px] font-bold leading-tight md:text-2xl">
        Схема покупки автомобиля с нами
      </a>
    </div>
  );
}