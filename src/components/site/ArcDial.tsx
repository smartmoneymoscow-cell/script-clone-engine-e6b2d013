import { useEffect, useRef, useState } from "react";

const items = [
  { num: "01", label: "о нас", href: "#about", angle: 156 },
  { num: "02", label: "доставка по России", href: "#delivery", angle: 124 },
  { num: "03", label: "отзывы", href: "#reviews", angle: 90 },
  { num: "04", label: "вопросы и ответы", href: "#faq", angle: 56 },
  { num: "05", label: "контакты", href: "#contacts", angle: 24 },
];

const CX = 600;
const CY = 238;
const R = 548;

function polar(angleDeg: number, radius: number) {
  const angle = (angleDeg * Math.PI) / 180;
  return {
    x: CX + radius * Math.cos(angle),
    y: CY + radius * Math.sin(angle),
  };
}

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
        const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / window.innerHeight));
        setRotation((progress - 0.5) * 18);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const ticks = Array.from({ length: 120 }, (_, index) => index * 3);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 z-20">
      <svg
        viewBox="0 0 1200 900"
        preserveAspectRatio="none"
        className="absolute inset-0 size-full"
        aria-hidden
      >
        <g
          style={{
            transform: `rotate(${rotation}deg)`,
            transformOrigin: `${CX}px ${CY}px`,
            transition: "transform 120ms linear",
          }}
        >
          <circle cx={CX} cy={CY} r={R} fill="none" stroke="var(--color-border)" strokeWidth="2" />
          <path
            d={ticks
              .map((angle, index) => {
                const major = index % 5 === 0;
                const start = polar(angle, R - (major ? 24 : 12));
                const end = polar(angle, R);
                return `M${start.x.toFixed(2)} ${start.y.toFixed(2)}L${end.x.toFixed(2)} ${end.y.toFixed(2)}`;
              })
              .join(" ")}
            fill="none"
            stroke="var(--color-border)"
            strokeWidth="2"
          />
          <path
            d={ticks
              .filter((_, index) => index % 5 === 0)
              .map((angle) => {
                const start = polar(angle, R - 25);
                const end = polar(angle, R + 1);
                return `M${start.x.toFixed(2)} ${start.y.toFixed(2)}L${end.x.toFixed(2)} ${end.y.toFixed(2)}`;
              })
              .join(" ")}
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="3"
          />
        </g>

        <path d="M8 590 Q270 814 585 832 L585 900 L8 900 Z" fill="var(--color-card)" />
        <path d="M615 832 Q930 814 1192 590 L1192 900 L615 900 Z" fill="var(--color-card)" />
      </svg>

      {items.map((item) => {
        const position = polar(item.angle, R - 52);
        return (
          <a
            key={item.num}
            href={item.href}
            className="group pointer-events-auto absolute w-28 -translate-x-1/2 -translate-y-1/2 text-center md:w-36"
            style={{ left: `${(position.x / 1200) * 100}%`, top: `${(position.y / 900) * 100}%` }}
          >
            <span className="block text-[9px] font-extrabold text-primary md:text-xs">{item.num}</span>
            <span className="mt-1 block text-[9px] leading-tight text-muted-foreground transition-colors group-hover:text-foreground md:text-xs">
              {item.label}
            </span>
          </a>
        );
      })}
    </div>
  );
}