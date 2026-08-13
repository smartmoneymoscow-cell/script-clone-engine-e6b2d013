import { useRef, useState } from "react";

export function RangeSlider({
  min,
  max,
  step,
  value,
  onChange,
}: {
  min: number;
  max: number;
  step: number;
  value: { min: number; max: number };
  onChange: (value: { min: number; max: number }) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState<"min" | "max" | null>(null);

  const toPct = (v: number) => ((v - min) / (max - min)) * 100;

  const valueFromClientX = (clientX: number) => {
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect) return min;
    const pct = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    const raw = min + pct * (max - min);
    return Math.round(raw / step) * step;
  };

  const startDrag = (thumb: "min" | "max") => (e: React.PointerEvent) => {
    e.preventDefault();
    setDragging(thumb);

    const handleMove = (ev: PointerEvent) => {
      const val = valueFromClientX(ev.clientX);
      if (thumb === "min") {
        if (val <= value.max - step) onChange({ min: Math.max(min, val), max: value.max });
      } else {
        if (val >= value.min + step) onChange({ min: value.min, max: Math.min(max, val) });
      }
    };

    const handleUp = () => {
      setDragging(null);
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
  };

  const minPct = toPct(value.min);
  const maxPct = toPct(value.max);

  return (
    <div className="relative h-1.5 rounded-full bg-surface-2 touch-none" ref={trackRef}>
      <div
        className="absolute inset-y-0 rounded-full bg-primary"
        style={{ left: `${minPct}%`, right: `${100 - maxPct}%` }}
      />
      <button
        type="button"
        aria-label="Минимальная цена"
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value.min}
        onPointerDown={startDrag("min")}
        className={`absolute -top-1.5 size-4 rounded-full bg-primary shadow transition-transform focus:outline-none ${
          dragging === "min" ? "scale-125" : ""
        }`}
        style={{ left: `calc(${minPct}% - 8px)` }}
      />
      <button
        type="button"
        aria-label="Максимальная цена"
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value.max}
        onPointerDown={startDrag("max")}
        className={`absolute -top-1.5 size-4 rounded-full bg-primary shadow transition-transform focus:outline-none ${
          dragging === "max" ? "scale-125" : ""
        }`}
        style={{ left: `calc(${maxPct}% - 8px)` }}
      />
    </div>
  );
}
