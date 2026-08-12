import { useEffect, useRef, useState } from "react";

const W = 1200;
const H = 600;
const CX = 600;
const CY = -260;
const R = 760;

const items = [
  { num: "01", label: "о нас", href: "#about", angle: 137 },
  { num: "02", label: "доставка по России", href: "#delivery", angle: 111 },
  { num: "03", label: "отзывы", href: "#reviews", angle: 90 },
  { num: "04", label: "вопросы и ответы", href: "#faq", angle: 69 },
  { num: "05", label: "контакты", href: "#contacts", angle: 43 },
];

function polar(angleDeg: number, radius: number) {
  const a = (angleDeg * Math.PI) / 180;
  return { x: CX + radius * Math.cos(a), y: CY + radius * Math.sin(a) };
}

const START = 37;
const END = 143;
const TICKS = Array.from({ length: 71 }, (_, i) => START + ((END - START) * i) / 70);

const left = polar(END, R);
const right = polar(START, R);
const gapL = polar(92.6, R);
const gapR = polar(87.4, R);

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
        setRotation((progress - 0.5) * 26);
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
    <div ref={ref} className="relative w-full" style={{ aspectRatio: `${W} / ${VB_H}`, marginTop: "-4%" }}>
      <svg viewBox={`0 ${VB_TOP} ${W} ${VB_H}`} className="absolute inset-0 size-full" aria-hidden>

        <defs>
          <clipPath id="dial-clip">
            <path
              d={`M0 ${H} L0 ${left.y.toFixed(1)} A${R} ${R} 0 0 0 ${gapL.x.toFixed(1)} ${gapL.y.toFixed(1)} L${gapL.x.toFixed(1)} ${H} Z
                  M${gapR.x.toFixed(1)} ${H} L${gapR.x.toFixed(1)} ${gapR.y.toFixed(1)} A${R} ${R} 0 0 0 ${W} ${right.y.toFixed(1)} L${W} ${H} Z`}
            />
          </clipPath>
        </defs>

        {/* two panels attached to the bottom of the dial */}
        <g clipPath="url(#dial-clip)">
          <rect x="0" y="0" width={W} height={H} fill="var(--color-card)" />
        </g>

        {/* rotating tick ring */}
        <g
          style={{
            transform: `rotate(${rotation}deg)`,
            transformOrigin: `${CX}px ${CY}px`,
            transition: "transform 200ms linear",
          }}
        >
          <path
            d={`M${left.x.toFixed(1)} ${left.y.toFixed(1)} A${R} ${R} 0 0 0 ${right.x.toFixed(1)} ${right.y.toFixed(1)}`}
            fill="none"
            stroke="var(--color-border)"
            strokeWidth="1.5"
          />
          <path
            d={TICKS.map((a, i) => {
              const major = i % 5 === 0;
              const s = polar(a, R - (major ? 26 : 11));
              const e = polar(a, R);
              return `M${s.x.toFixed(1)} ${s.y.toFixed(1)}L${e.x.toFixed(1)} ${e.y.toFixed(1)}`;
            }).join(" ")}
            fill="none"
            stroke="var(--color-border)"
            strokeWidth="1.5"
          />
          <path
            d={TICKS.filter((_, i) => i % 5 === 0)
              .map((a) => {
                const s = polar(a, R - 30);
                const e = polar(a, R + 2);
                return `M${s.x.toFixed(1)} ${s.y.toFixed(1)}L${e.x.toFixed(1)} ${e.y.toFixed(1)}`;
              })
              .join(" ")}
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="3"
          />
        </g>
      </svg>

      {items.map((item) => {
        const p = polar(item.angle, R - 62);
        return (
          <a
            key={item.num}
            href={item.href}
            className="group absolute w-24 -translate-x-1/2 -translate-y-1/2 text-center md:w-36"
            style={{ left: `${(p.x / W) * 100}%`, top: `${(p.y / H) * 100}%` }}
          >
            <span className="block text-[9px] font-extrabold text-primary md:text-xs">{item.num}</span>
            <span className="mt-1 block text-[8px] leading-tight text-muted-foreground transition-colors group-hover:text-foreground md:text-xs">
              {item.label}
            </span>
          </a>
        );
      })}

      <a
        href="#about"
        className="absolute bottom-[6%] left-[4%] w-[38%] text-sm font-bold leading-snug md:text-2xl"
      >
        Преимущества работы с ТОЯМА АВТО
      </a>
      <a
        href="#scheme"
        className="absolute bottom-[6%] right-[4%] w-[38%] text-right text-sm font-bold leading-snug md:text-2xl"
      >
        Схема покупки автомобиля с нами
      </a>
    </div>
  );
}
