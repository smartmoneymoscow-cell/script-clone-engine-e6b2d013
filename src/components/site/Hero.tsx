import heroCar from "@/assets/hero-car.jpg";

const steps = [
  { num: "01", label: "о нас", href: "#about" },
  { num: "02", label: "доставка по России", href: "#delivery" },
  { num: "03", label: "отзывы", href: "#reviews" },
  { num: "04", label: "вопросы и ответы", href: "#faq" },
  { num: "05", label: "контакты", href: "#contacts" },
];

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-[1500px] px-4 pt-6 md:px-8">
      <div className="relative overflow-hidden rounded-3xl">
        <img
          src={heroCar}
          alt="Красный седан с аукциона Японии на ночной улице"
          width={1600}
          height={912}
          className="h-[520px] w-full object-cover md:h-[600px]"
        />
        <div className="absolute inset-0 hero-overlay" />

        <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Тояма Авто
            </p>
            <h1 className="mt-4 text-3xl font-extrabold leading-[1.05] md:text-6xl">
              Авто с аукционов
              <br />с доставкой
              <br />
              во Владивосток
            </h1>
            <p className="mt-5 max-w-md text-sm text-muted-foreground md:text-base">
              <span className="font-bold text-foreground">65 658 автомобилей</span> выставлено
              на аукционах на ближайшие 3 дня
            </p>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              Сэкономим до 500 000 ₽ — покупка и доставка авто под ключ за 45 дней
            </p>
          </div>

          <nav className="hidden flex-wrap items-end gap-x-8 gap-y-3 md:flex">
            {steps.map((s) => (
              <a key={s.num} href={s.href} className="group">
                <span className="block text-xs font-bold text-primary">{s.num}</span>
                <span className="text-sm text-foreground/80 transition-colors group-hover:text-primary">
                  {s.label}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="relative z-10 -mt-10 rounded-3xl bg-card p-5 card-shadow md:mx-8 md:p-8">
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
