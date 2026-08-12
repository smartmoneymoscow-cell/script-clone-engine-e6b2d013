import cycleShip from "@/assets/cycle-ship.jpg";
import interior from "@/assets/interior.jpg";
import { Send } from "lucide-react";

export function PurchaseCycle() {
  return (
    <section id="delivery" className="mx-auto max-w-[1500px] px-4 py-8 md:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-card">
        <img
          src={cycleShip}
          alt="Автомобиль у контейнеров в порту"
          loading="lazy"
          width={1200}
          height={700}
          className="absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover md:block"
        />
        <div className="relative max-w-2xl p-6 md:p-12">
          <h2 className="text-2xl font-bold md:text-4xl">
            Полный цикл покупки
            <br />
            <span className="text-primary">15–45 дней*</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            * Среднее время покупки автомобиля, доставки по РФ и таможенного оформления. Наша
            команда всегда на связи и информирует Вас обо всех этапах сделки.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#contacts"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Рассчитать стоимость
            </a>
            <a
              href="#stock"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary"
            >
              Выбрать авто
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutBlock() {
  return (
    <section className="mx-auto max-w-[1500px] px-4 py-8 md:px-8">
      <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-3xl bg-card p-6 md:p-10">
          <h2 className="text-xl font-bold leading-snug md:text-2xl">
            Мы помогаем нашим клиентам приобрести автомобили из Китая, Японии и Кореи под
            заказ. Сопровождаем Вас на всех этапах покупки — от подбора автомобиля за рубежом
            до передачи ключей в России в вашем городе.
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Собственная команда в Китае ищет, проверяет и подготавливает автомобиль перед
            отправкой. Каждый ваш заказ проходит проверку состояния, и Вы получаете подробный
            фото-видео отчёт перед покупкой.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Мы подбираем автомобили на аукционах и на внутреннем рынке Японии, Китая и Южной
            Кореи, ориентируясь на пожелания и требования клиента. Работаем по договору и
            заранее фиксируем сроки, этапы и стоимость.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl">
          <img
            src={interior}
            alt="Салон автомобиля"
            loading="lazy"
            width={900}
            height={700}
            className="h-full min-h-[280px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-background/60" />
          <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
            <p className="max-w-[220px] text-base font-semibold">
              Подписывайтесь на наш Telegram
            </p>
            <a
              href="#contacts"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Send className="size-4" />
              Подписаться
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
