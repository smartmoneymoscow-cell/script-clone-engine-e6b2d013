import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { Advantages } from "@/components/site/Advantages";
import { CatalogSection } from "@/components/site/CatalogSection";
import { PurchaseCycle, AboutBlock } from "@/components/site/Blocks";
import { Reviews, Scheme, Faq, Contacts, SiteFooter } from "@/components/site/Sections";
import { japanCars, chinaCars, stockCars } from "@/data/cars";

const catalogFields = [
  { label: "Марка", placeholder: "Все марки" },
  { label: "Модель", placeholder: "Все модели" },
  { label: "Год выпуска", placeholder: "от — до" },
  { label: "Цена, руб.", placeholder: "от — до" },
];

function App() {
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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
