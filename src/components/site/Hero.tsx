import { useState } from "react";

import { ArcDial } from "./ArcDial";
import { FormSelect } from "./FormSelect";
import { RangeSlider } from "./RangeSlider";

const countries: Record<string, string[]> = {
  Япония: ["Toyota", "Nissan", "Honda", "Mazda", "Mitsubishi", "Lexus", "Subaru", "Suzuki", "Daihatsu"],
  Корея: ["Hyundai", "Kia", "Genesis", "SsangYong"],
  Китай: ["Chery", "Haval", "Geely", "Changan", "BYD", "Faw", "Jetta"],
};

const models = [
  "Все модели",
  "A3",
  "X1",
  "Roox",
  "Demio",
  "Land Cruiser",
  "3 Series",
  "Magotan",
  "Sagitar",
  "Passat",
  "Tayron",
  "Qashqai",
  "VS5",
  "Vezel",
];

function formatPrice(n: number) {
  return n.toLocaleString("ru-RU") + " ₽";
}

export function Hero() {
  const [country, setCountry] = useState("Япония");
  const [brand, setBrand] = useState("Все марки");
  const [model, setModel] = useState("Все модели");
  const [price, setPrice] = useState({ min: 0, max: 25_000_000 });

  const brands = ["Все марки", ...countries[country]];

  const handleSearch = () => {
    document.getElementById("japan")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="w-full -mt-16 md:-mt-20">
      <div className="w-full">
        <ArcDial />
      </div>

      <div className="mx-4 rounded-3xl bg-card p-5 card-shadow md:mx-8 md:p-8 xl:mx-auto xl:max-w-[1440px]">
        <div className="grid gap-4 md:grid-cols-3">
          <FormSelect
            label="Страна"
            value={country}
            options={Object.keys(countries)}
            onChange={(v) => {
              setCountry(v);
              setBrand("Все марки");
            }}
          />
          <FormSelect label="Марка" value={brand} options={brands} onChange={setBrand} />
          <FormSelect label="Модель" value={model} options={models} onChange={setModel} />
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-[1fr_280px] md:items-end">
          <div>
            <RangeSlider
              min={0}
              max={25_000_000}
              step={100_000}
              value={price}
              onChange={setPrice}
            />
            <div className="mt-3 flex justify-between text-xs text-muted-foreground">
              <span>{formatPrice(price.min)}</span>
              <span>{formatPrice(price.max)}</span>
            </div>
          </div>
          <button
            type="button"
            onClick={handleSearch}
            className="h-12 rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Найти автомобиль
          </button>
        </div>
      </div>
    </section>
  );
}
