import { FileText, Clock, Wallet, Ship, CreditCard, CheckCircle2 } from "lucide-react";
import detailRed from "@/assets/detail-red.jpg";

const items = [
  {
    icon: FileText,
    title: "Таможенное оформление",
    text: "Растаможим технику, заберем с СВХ и отвезем в лабораторию",
  },
  {
    icon: Clock,
    title: "Гибкий график работы",
    text: "Менеджеры доступны по телефону и WhatsApp",
  },
  {
    icon: Wallet,
    title: "Фиксированная комиссия за услуги",
    text: "Минимальная комиссия компании 50 000 ₽",
  },
  {
    icon: Ship,
    title: "Доставка автомобиля в Россию",
    text: "Предлагаем разные варианты доставки авто на кораблях",
  },
  {
    icon: CreditCard,
    title: "Оплата в 3 этапа",
    text: "Авансовый платеж, перевод за автомобиль, оплата таможенных платежей",
  },
  {
    icon: CheckCircle2,
    title: "Выдача авто в любой день",
    text: "Вы можете забрать авто в любой день с нашей стоянки",
  },
];

export function Advantages() {
  return (
    <section id="about" className="mx-auto max-w-[1500px] px-4 py-8 md:px-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center rounded-3xl bg-card p-8">
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            Преимущества работы с&nbsp;ТОЯМА АВТО
          </h2>
        </div>

        {items.slice(0, 3).map((i) => (
          <Card key={i.title} {...i} />
        ))}

        <div className="overflow-hidden rounded-3xl">
          <img
            src={detailRed}
            alt="Красный автомобиль крупным планом"
            loading="lazy"
            width={900}
            height={900}
            className="h-full min-h-[240px] w-full object-cover"
          />
        </div>

        {items.slice(3).map((i) => (
          <Card key={i.title} {...i} />
        ))}
      </div>
    </section>
  );
}

function Card({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof FileText;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl bg-card p-8">
      <Icon className="size-7 text-primary" />
      <h3 className="mt-8 text-sm font-bold uppercase leading-snug">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}
