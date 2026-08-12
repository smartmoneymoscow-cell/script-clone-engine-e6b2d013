import { reviews } from "@/data/cars";
import { Star, Phone, MapPin, Mail, Plus } from "lucide-react";

export function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-[1500px] px-4 py-8 md:px-8">
      <div className="rounded-3xl bg-card p-6 md:p-10">
        <h2 className="text-center text-2xl font-bold md:text-4xl">Отзывы от наших клиентов</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <article key={r.name} className="rounded-2xl bg-surface-2 p-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-muted-foreground">{r.source}</span>
                <span className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3 fill-primary text-primary" />
                  ))}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              <p className="mt-4 text-sm font-semibold">{r.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const scheme = [
  { n: "01", t: "Заявка и подбор", d: "Обсуждаем бюджет, требования и подбираем варианты на аукционах и внутреннем рынке." },
  { n: "02", t: "Договор и аванс", d: "Фиксируем сроки, этапы и стоимость. Вносится авансовый платёж." },
  { n: "03", t: "Покупка и отчёт", d: "Выкупаем лот, проверяем состояние и присылаем подробный фото-видео отчёт." },
  { n: "04", t: "Доставка и таможня", d: "Доставляем морем, растаможиваем и оформляем документы." },
  { n: "05", t: "Передача ключей", d: "Забираете авто со стоянки или отправляем в ваш город по России." },
];

export function Scheme() {
  return (
    <section id="scheme" className="mx-auto max-w-[1500px] px-4 py-8 md:px-8">
      <h2 className="text-2xl font-bold md:text-4xl">Схема покупки автомобиля с нами</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
        {scheme.map((s) => (
          <div key={s.n} className="rounded-3xl bg-card p-6">
            <span className="text-2xl font-extrabold text-primary">{s.n}</span>
            <h3 className="mt-4 text-sm font-bold uppercase">{s.t}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const faq = [
  {
    q: "Сколько занимает покупка и доставка автомобиля?",
    a: "В среднем 15–45 дней с момента покупки лота до выдачи автомобиля с учётом доставки по РФ и таможенного оформления.",
  },
  {
    q: "Какая комиссия компании?",
    a: "Комиссия фиксированная — от 50 000 ₽. Все расходы согласовываются заранее и прописываются в договоре.",
  },
  {
    q: "Можно ли посмотреть состояние авто до покупки?",
    a: "Да. Наша команда проверяет автомобиль и присылает подробный фото- и видеоотчёт перед отправкой.",
  },
  {
    q: "Работаете ли вы с другими городами России?",
    a: "Да, доставляем автомобиль в любой город России автовозом или ж/д транспортом.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-[1500px] px-4 py-8 md:px-8">
      <div className="rounded-3xl bg-card p-6 md:p-10">
        <h2 className="text-2xl font-bold md:text-4xl">Вопросы и ответы</h2>
        <div className="mt-8 space-y-3">
          {faq.map((f) => (
            <details key={f.q} className="group rounded-2xl bg-surface-2 p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold">
                {f.q}
                <Plus className="size-4 shrink-0 text-primary transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contacts() {
  return (
    <section id="contacts" className="mx-auto max-w-[1500px] px-4 py-8 md:px-8">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl bg-card p-6 md:p-10">
          <h2 className="text-2xl font-bold md:text-4xl">Контакты</h2>
          <ul className="mt-8 space-y-5 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="size-4 text-primary" />
              <a href="tel:+79510005155" className="font-semibold">
                +7 951 000-51-55
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 text-primary" />
              Владивосток, ул. Жигура, 8
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 text-primary" />
              info@toyama-auto.ru
            </li>
          </ul>
        </div>

        <form className="rounded-3xl bg-card p-6 md:p-10" onSubmit={(e) => e.preventDefault()}>
          <h3 className="text-xl font-bold">Оставить заявку</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Менеджер свяжется с вами и рассчитает стоимость авто под ключ.
          </p>
          <div className="mt-6 space-y-3">
            <input
              placeholder="Ваше имя"
              className="h-12 w-full rounded-xl border border-input bg-surface px-4 text-sm outline-none focus:border-primary"
            />
            <input
              placeholder="Телефон"
              className="h-12 w-full rounded-xl border border-input bg-surface px-4 text-sm outline-none focus:border-primary"
            />
            <button className="h-12 w-full rounded-full bg-primary text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
              Отправить заявку
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-border py-10">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-4 px-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
        <span className="text-lg font-extrabold italic text-primary">
          ТОЯМА <span className="text-foreground">АВТО</span>
        </span>
        <p>Авто с аукционов Японии, Кореи и Китая под ключ</p>
        <p>© {new Date().getFullYear()} Тояма Авто</p>
      </div>
    </footer>
  );
}
