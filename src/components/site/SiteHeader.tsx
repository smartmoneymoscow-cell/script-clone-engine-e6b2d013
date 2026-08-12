import { Phone, Send, MessageCircle, User, ChevronDown, Menu } from "lucide-react";
import { useState } from "react";

const nav = [
  { label: "Авто Японии", href: "#japan" },
  { label: "Авто Кореи", href: "#korea" },
  { label: "Авто Китая", href: "#china" },
  { label: "В наличии", href: "#stock" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1500px] items-center gap-8 px-4 md:h-20 md:px-8">
        <a href="#top" className="shrink-0 leading-none">
          <span className="block text-xl font-extrabold italic tracking-tight text-primary md:text-2xl">
            ТОЯМА
          </span>
          <span className="block text-xl font-extrabold italic tracking-tight md:text-2xl">
            АВТО
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-sm font-semibold text-foreground/90 transition-colors hover:text-primary"
            >
              {item.label}
              <ChevronDown className="size-3.5 text-muted-foreground" />
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:gap-3">
          <IconLink href="tel:+79510005155" label="Позвонить">
            <Phone className="size-4" />
          </IconLink>
          <IconLink href="#contacts" label="WhatsApp" tone="violet">
            <MessageCircle className="size-4" />
          </IconLink>
          <IconLink href="#contacts" label="Telegram">
            <Send className="size-4" />
          </IconLink>
          <a
            href="#contacts"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Оставить заявку
          </a>
          <IconLink href="#contacts" label="Профиль" tone="primary">
            <User className="size-4" />
          </IconLink>
          <button
            aria-label="Меню"
            onClick={() => setOpen((v) => !v)}
            className="flex size-9 items-center justify-center rounded-full border border-border lg:hidden"
          >
            <Menu className="size-4" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border px-4 py-3 lg:hidden">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-semibold"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function IconLink({
  href,
  label,
  children,
  tone = "muted",
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  tone?: "muted" | "violet" | "primary";
}) {
  const tones = {
    muted: "border border-border text-foreground hover:border-primary",
    violet: "bg-[oklch(0.55_0.2_300)] text-primary-foreground",
    primary: "bg-primary text-primary-foreground",
  } as const;

  return (
    <a
      href={href}
      aria-label={label}
      className={`flex size-9 items-center justify-center rounded-full transition-colors md:size-10 ${tones[tone]}`}
    >
      {children}
    </a>
  );
}
