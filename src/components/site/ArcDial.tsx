import { useEffect, useRef, useState } from "react";

const items = [
  { num: "01", label: "о нас", href: "#about" },
  { num: "02", label: "доставка по России", href: "#delivery" },
  { num: "03", label: "отзывы", href: "#reviews" },
  { num: "04", label: "вопросы и ответы", href: "#faq" },
  { num: "05", label: "контакты", href: "#contacts" },
];

/** Angles along the upper arc: 180deg (left) → 360deg (right) */
const angles = [196, 228, 270, 312, 344];

const R = 300;
const CX = 320;
const CY = 320;

function polar(angleDeg: number, radius: number) {
  const a = (angleDeg * Math.PI) / 180;
  const r3 = (n: number) => (Math.round(n * 100) / 100).toFixed(2);
  return { x: r3(CX + radius * Math.cos(a)), y: r3(CY + radius * Math.sin(a)) };
}

export function ArcDial() {
  const ref = useRef<HTMLDivElement>(null);
  const [rot, setRot] = useState(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        setRot(progress * 60 - 30);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const ticks = Array.from({ length: 61 }, (_, i) => 180 + i * 3);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-x-0 top-0 z-10 h-full">
      <svg
        viewBox="0 0 640 340"
        className="absolute inset-x-0 top-0 mx-auto w-full max-w-[1500px]"
        aria-hidden
      >
        {/* rotating dial: ticks + rim */}
        <g
          style={{
            transform: `rotate(${rot}deg)`,
            transformOrigin: `${CX}px ${CY}px`,
            transition: "transform 120ms linear",
          }}
        >
          <circle
            cx={CX}
            cy={CY}
            r={R}
            fill="none"
            stroke="var(--color-border)"
            strokeWidth="1"
          />
          <path
            d={ticks
              .map((a, i) => {
                const major = i % 5 === 0;
                const p1 = polar(a, R - (major ? 16 : 8));
                const p2 = polar(a, R);
                return `M${p1.x} ${p1.y}L${p2.x} ${p2.y}`;
              })
              .join(" ")}
            stroke="var(--color-border)"
            strokeWidth="1"
            opacity="0.5"
          />
          <path
            d={ticks
              .filter((_, i) => i % 5 === 0)
              .map((a) => {
                const p1 = polar(a, R - 16);
                const p2 = polar(a, R);
                return `M${p1.x} ${p1.y}L${p2.x} ${p2.y}`;
              })
              .join(" ")}
            stroke="var(--color-primary)"
            strokeWidth="1.6"
            opacity="0.9"
          />
        </g>
      </svg>

      {/* static labels placed along the same arc */}
      <div className="absolute inset-x-0 top-0 mx-auto aspect-[640/340] w-full max-w-[1500px]">
        {items.map((it, i) => {
          const p = polar(angles[i]!, R + 4);
          const left = (Number(p.x) / 640) * 100;
          const top = (Number(p.y) / 340) * 100;
          return (
            <a
              key={it.num}
              href={it.href}
              className="group pointer-events-auto absolute w-32 -translate-x-1/2 -translate-y-1/2 text-center"
              style={{ left: `${left}%`, top: `${top}%` }}
            >
              <span className="block text-[11px] font-extrabold tracking-widest text-primary">
                {it.num}
              </span>
              <span className="mt-1 block text-[11px] leading-tight text-muted-foreground transition-colors group-hover:text-foreground md:text-sm">
                {it.label}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
