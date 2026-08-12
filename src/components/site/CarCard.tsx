import type { Car } from "@/data/cars";
import { Send, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";

export function CarCard({ car }: { car: Car }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-surface-2 card-shadow">
      <img
        src={car.image}
        alt={`${car.title} ${car.year}`}
        loading="lazy"
        className="h-44 w-full object-cover"
      />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-bold uppercase leading-tight">{car.title}</h3>
          <span className="shrink-0 text-xs text-muted-foreground">{car.year}</span>
        </div>
        {car.trim && (
          <p className="text-xs leading-snug text-muted-foreground">{car.trim}</p>
        )}
        <dl className="grid grid-cols-2 gap-x-3 gap-y-2 border-y border-border py-3 text-xs">
          <Spec label="Объем" value={car.volume} />
          <Spec label="Пробег" value={car.mileage} />
          <Spec label="КПП" value={car.kpp} />
          {car.fuel && <Spec label="Топливо" value={car.fuel} />}
        </dl>
        <div className="mt-auto">
          <p className="text-base font-bold text-primary">{car.price}</p>
          {car.note && (
            <p className="mt-1 text-[11px] text-muted-foreground">{car.note}</p>
          )}
          <div className="mt-3 flex items-center gap-2">
            <a
              href="#contacts"
              className="flex-1 rounded-full bg-primary px-3 py-2 text-center text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Связаться с нами
            </a>
            <a
              href="#contacts"
              aria-label="Telegram"
              className="flex size-8 items-center justify-center rounded-full border border-border"
            >
              <Send className="size-3.5" />
            </a>
            <a
              href="#contacts"
              aria-label="WhatsApp"
              className="flex size-8 items-center justify-center rounded-full bg-[oklch(0.55_0.2_300)] text-primary-foreground"
            >
              <MessageCircle className="size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-wide text-muted-foreground">{label}</dt>
      <dd className="font-semibold">{value}</dd>
    </div>
  );
}

export function CarrouselArrows() {
  return (
    <div className="flex items-center justify-end gap-2">
      <button
        aria-label="Назад"
        className="flex size-9 items-center justify-center rounded-full border border-border transition-colors hover:border-primary"
      >
        <ChevronLeft className="size-4" />
      </button>
      <button
        aria-label="Вперёд"
        className="flex size-9 items-center justify-center rounded-full border border-border transition-colors hover:border-primary"
      >
        <ChevronRight className="size-4" />
      </button>
    </div>
  );
}
