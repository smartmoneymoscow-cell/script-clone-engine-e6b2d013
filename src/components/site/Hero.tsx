import { ArcDial } from "./ArcDial";

export function Hero() {
  return (
    <section id="top" className="w-full pt-4 md:pt-6">
      <div className="w-full">
        <ArcDial />
      </div>



      <div className="mx-4 rounded-3xl bg-card p-5 card-shadow md:mx-8 md:p-8 xl:mx-auto xl:max-w-[1440px]">
        <div className="grid gap-4 md:grid-cols-3">
          <Select label="Страна" value="Япония" />
          <Select label="Марка" value="Все марки" />
          <Select label="Модель" value="Все модели" />
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-[1fr_280px] md:items-end">
          <div>
            <div className="relative h-1.5 rounded-full bg-surface-2">
              <div className="absolute inset-y-0 left-0 w-2/3 rounded-full bg-primary" />
              <span className="absolute -top-1.5 left-0 size-4 rounded-full bg-primary" />
              <span className="absolute -top-1.5 left-2/3 size-4 rounded-full bg-primary" />
            </div>
            <div className="mt-3 flex justify-between text-xs text-muted-foreground">
              <span>0 ₽</span>
              <span>25 000 000 ₽</span>
            </div>
          </div>
          <button className="h-12 rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
            Найти автомобиль
          </button>
        </div>
      </div>
    </section>
  );
}

function Select({ label, value }: { label: string; value: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs text-muted-foreground">{label}</span>
      <div className="flex h-12 items-center justify-between rounded-xl border border-input bg-surface px-4 text-sm">
        <span>{value}</span>
        <span className="text-muted-foreground">⌄</span>
      </div>
    </label>
  );
}
