import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { Advantages } from "@/components/site/Advantages";
import { CatalogSection } from "@/components/site/CatalogSection";
import { PurchaseCycle, AboutBlock } from "@/components/site/Blocks";
import { Reviews, Scheme, Faq, Contacts, SiteFooter } from "@/components/site/Sections";
import { japanCars, chinaCars, stockCars } from "@/data/cars";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ТОЯМА АВТО — авто с аукционов Японии, Кореи и Китая" },
      {
        name: "description",
        content:
          "Покупка и доставка авто с аукционов Японии, Кореи и Китая под ключ за 15–45 дней. Фиксированная комиссия, таможенное оформление, доставка по России.",
      },
      { property: "og:title", content: "ТОЯМА АВТО — авто с аукционов под ключ" },
      {
        property: "og:description",
        content:
          "65 658 автомобилей на аукционах. Экономия до 500 000 ₽, полный цикл покупки 15–45 дней.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const catalogFields = [
  { label: "Марка", placeholder: "Все марки" },
  { label: "Модель", placeholder: "Все модели" },
  { label: "Год выпуска", placeholder: "от — до" },
  { label: "Цена, руб.", placeholder: "от — до" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Advantages />

        <CatalogSection
          id="japan"
          title="Авто из Японии"
          cars={japanCars}
          fields={catalogFields}
          found="398 082"
          brands={["Toyota", "Nissan", "Honda", "Mazda", "Mitsubishi", "Lexus"]}
        />

        <PurchaseCycle />
        <AboutBlock />

        <CatalogSection
          id="china"
          title="Авто из Китая"
          cars={chinaCars}
          fields={catalogFields}
          found="48 712"
          brands={["Chery", "Haval", "Geely", "Changan", "BYD", "Faw"]}
        />

        <CatalogSection
          id="stock"
          title="Авто в наличии"
          cars={stockCars}
          fields={[
            { label: "Марка", placeholder: "Все марки" },
            { label: "Модель", placeholder: "Все модели" },
            { label: "Цена, руб.", placeholder: "от — до" },
            { label: "Год выпуска", placeholder: "от — до" },
          ]}
        />

        <div id="korea">
          <Reviews />
        </div>
        <Scheme />
        <Faq />
        <Contacts />
      </main>
      <SiteFooter />
    </div>
  );
}
