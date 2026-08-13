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
  const hero = !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/95 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1500px] items-center gap-8 px-4 md:h-20 md:px-8">
        <a href="#top" className="shrink-0 leading-none">
          <span
            className={`block text-xl font-extrabold italic tracking-tight md:text-2xl ${
              hero ? "text-white" : "text-primary"
            }`}
          >
            ТОЯМА
          </span>
          <span className="block text-xl font-extrabold italic tracking-tight text-white md:text-2xl">
            АВТО
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-1 text-sm font-semibold transition-colors ${
                hero
                  ? "text-white/90 hover:text-white"
                  : "text-foreground/90 hover:text-primary"
              }`}
            >
              {item.label}
              <ChevronDown
                className={`size-3.5 ${
                  hero ? "text-white/70" : "text-muted-foreground"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:gap-3">
          <IconLink href="tel:+79510005155" label="Позвонить" hero={hero}>
            <Phone className="size-4" />
          </IconLink>
          <IconLink href="#contacts" label="WhatsApp" tone="violet" hero={hero}>
            <MessageCircle className="size-4" />
          </IconLink>
          <IconLink href="#contacts" label="Telegram" hero={hero}>
            <Send className="size-4" />
          </IconLink>
          <a
            href="#contacts"
            className={`hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90 sm:inline-flex ${
              hero ? "bg-white text-primary" : "bg-primary text-primary-foreground"
            }`}
          >
            Оставить заявку
          </a>
          <IconLink href="#contacts" label="Профиль" tone="primary" hero={hero}>
            <User className="size-4" />
          </IconLink>
          <button
            aria-label="Меню"
            onClick={() => setOpen((v) => !v)}
            className={`flex size-9 items-center justify-center rounded-full lg:hidden ${
              hero ? "border border-white/50 text-white" : "border border-border"
            }`}
          >
            <Menu className="size-4" />
          </button>
        </div>
      </div>

      {open && (
        <nav
          className={`border-t px-4 py-3 lg:hidden ${
            hero ? "border-white/20" : "border-border"
          }`}
        >
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm font-semibold ${
                hero ? "text-white" : ""
              }`}
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
  hero = false,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  tone?: "muted" | "violet" | "primary";
  hero?: boolean;
}) {
  const tones = {
    muted: hero
      ? "border border-white/50 text-white hover:bg-white/20"
      : "border border-border text-foreground hover:border-primary",
    violet: hero
      ? "bg-white text-[oklch(0.55_0.2_300)]"
      : "bg-[oklch(0.55_0.2_300)] text-primary-foreground",
    primary: hero
      ? "bg-white text-primary"
      : "bg-primary text-primary-foreground",
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
