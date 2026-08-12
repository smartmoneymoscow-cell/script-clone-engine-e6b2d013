import heroCar from "@/assets/hero-car.jpg";
import { ArcDial } from "./ArcDial";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-[1500px] px-4 pt-8 md:px-8">
      <div className="relative mx-auto aspect-[4/5] w-full max-w-[1200px] overflow-hidden md:aspect-[4/3]">
        <div className="absolute inset-x-[7%] top-[2%] h-[64%] overflow-hidden rounded-[2rem] md:inset-x-[4%] md:rounded-[3.5rem]">
            <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,oklch(0.5_0.19_28)_0%,oklch(0.26_0.09_28)_55%,oklch(0.19_0.02_285)_100%)]" />
            <img
              src={heroCar}
              alt="Красный седан с аукциона Японии"
              width={1600}
              height={912}
              className="relative size-full object-cover mix-blend-luminosity opacity-70"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-6 text-center md:p-12">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-primary-foreground/70">
                  Тояма Авто
                </p>
                <h1 className="mt-4 text-2xl font-extrabold uppercase leading-[0.95] md:text-6xl">
                  Авто с аукционов
                  <br />с доставкой во Владивосток
                </h1>
              </div>
              <p className="mx-auto max-w-sm text-xs text-foreground/80 md:text-sm">
                <span className="font-bold">65 658 автомобилей</span> выставлено на аукционах
                на ближайшие 3 дня
              </p>
            </div>
        </div>

        <p className="absolute left-1/2 top-[3.5%] z-30 w-[72%] -translate-x-1/2 text-center text-[10px] leading-relaxed text-primary-foreground/75 md:w-auto md:text-sm">
          Сэкономим до <span className="font-semibold text-primary-foreground">500 000 ₽</span>, покупка и доставка авто под ключ за 45 дней
        </p>

        <ArcDial />

        <a href="#about" className="absolute bottom-[4%] left-[4%] z-30 flex h-[17%] w-[43%] items-end p-4 text-sm font-bold leading-snug md:p-8 md:text-2xl">
          Преимущества работы с ТОЯМА АВТО
        </a>
        <a href="#scheme" className="absolute bottom-[4%] right-[4%] z-30 flex h-[17%] w-[43%] items-end p-4 text-sm font-bold leading-snug md:p-8 md:text-2xl">
          Схема покупки автомобиля с нами
        </a>
      </div>

      <div className="rounded-3xl bg-card p-5 card-shadow md:p-8">
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
