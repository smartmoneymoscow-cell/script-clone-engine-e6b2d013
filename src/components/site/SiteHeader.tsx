import { Phone, Send, MessageCircle, User, ChevronDown, Menu } from "lucide-react";
import { useEffect, useState } from "react";

const nav = [
  { label: "Авто Японии", href: "#japan" },
  { label: "Авто Кореи", href: "#korea" },
  { label: "Авто Китая", href: "#china" },
  { label: "В наличии", href: "#stock" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-background/95 backdrop-blur"
          : "roadster-header border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1500px] items-center gap-8 px-4 md:h-20 md:px-8">
        <a href="#top" className="shrink-0 leading-none">
          <span
            className={`block text-xl font-extrabold italic tracking-tight md:text-2xl ${
              scrolled ? "text-primary" : "text-primary-foreground"
            }`}
          >
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
              <ChevronDown className="size-3.5 opacity-70" />
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:gap-3">
          <IconLink href="tel:+79510005155" label="Позвонить" scrolled={scrolled}>
            <Phone className="size-4" />
          </IconLink>
          <IconLink href="#contacts" label="WhatsApp" tone="violet" scrolled={scrolled}>
            <MessageCircle className="size-4" />
          </IconLink>
          <IconLink href="#contacts" label="Telegram" scrolled={scrolled}>
            <Send className="size-4" />
          </IconLink>
          <a
            href="#contacts"
            className={`hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90 sm:inline-flex ${
              scrolled
                ? "bg-primary text-primary-foreground"
                : "bg-primary-foreground text-primary"
            }`}
          >
            Оставить заявку
          </a>
          <IconLink href="#contacts" label="Профиль" tone="primary" scrolled={scrolled}>
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
        <nav className="border-t border-border bg-background px-4 py-3 lg:hidden">
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
  scrolled,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  tone?: "muted" | "violet" | "primary";
  scrolled: boolean;
}) {
  const scrolledTones = {
    muted: "border border-border text-foreground hover:border-primary",
    violet: "bg-[oklch(0.55_0.2_300)] text-primary-foreground",
    primary: "bg-primary text-primary-foreground",
  } as const;

  const heroTones = {
    muted: "border border-primary-foreground/45 text-primary-foreground hover:bg-primary-foreground/15",
    violet: "border border-primary-foreground/45 text-primary-foreground hover:bg-primary-foreground/15",
    primary: "bg-primary-foreground text-primary",
  } as const;

  return (
    <a
      href={href}
      aria-label={label}
      className={`flex size-9 items-center justify-center rounded-full transition-colors md:size-10 ${
        scrolled ? scrolledTones[tone] : heroTones[tone]
      }`}
    >
      {children}
    </a>
  );
}
