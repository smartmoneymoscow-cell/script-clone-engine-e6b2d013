import { useMemo, useState } from "react";

import type { Car } from "@/data/cars";
import { CarCard, CarrouselArrows } from "./CarCard";
import { FormSelect } from "./FormSelect";

type Field = { label: string; placeholder: string; wide?: boolean };

function parsePrice(p: string) {
  return Number(p.replace(/\D/g, ""));
}

function inRange(value: number, range: string) {
  if (range.startsWith("до ")) {
    return value <= parsePrice(range);
  }
  if (range.startsWith("от ")) {
    return value >= parsePrice(range);
  }
  const parts = range.split("—").map(parsePrice);
  if (parts.length === 2 && parts[0] !== undefined && parts[1] !== undefined) {
    return value >= parts[0] && value <= parts[1];
  }
  return true;
}

function getOptions(label: string, cars: Car[], placeholder: string) {
  if (label === "Марка") {
    const brands = Array.from(
      new Set(cars.map((c) => c.title.split(" ")[0] ?? ""))
    ).filter(Boolean);
    return [placeholder, ...brands];
  }
  if (label === "Модель") {
    const models = Array.from(
      new Set(cars.map((c) => c.title.split(" ")[1] ?? ""))
    ).filter(Boolean);
    return [placeholder, ...models];
  }
  if (label === "Год выпуска") {
    const years = Array.from(new Set(cars.map((c) => c.year))).sort();
    return [placeholder, ...years];
  }
  if (label === "Цена, руб.") {
    return [
      placeholder,
      "до 1 500 000 ₽",
      "1 500 000 — 3 000 000 ₽",
      "3 000 000 — 5 000 000 ₽",
      "от 5 000 000 ₽",
    ];
  }
  return [placeholder];
}

export function CatalogSection({
  id,
  title,
  cars,
  fields,
  found,
  brands,
}: {
  id: string;
  title: string;
  cars: Car[];
  fields: Field[];
  found?: string;
  brands?: string[];
}) {
  const [filters, setFilters] = useState<Record<string, string>>(() =>
    Object.fromEntries(fields.map((f) => [f.label, f.placeholder]))
  );
  const [applied, setApplied] = useState(false);

  const filteredCars = useMemo(() => {
    if (!applied) return cars;
    return cars.filter((car) => {
      const brand = filters["Марка"];
      if (brand && brand !== "Все марки" && !car.title.toLowerCase().startsWith(brand.toLowerCase())) {
        return false;
      }
      const model = filters["Модель"];
      if (model && model !== "Все модели" && !car.title.toLowerCase().includes(model.toLowerCase())) {
        return false;
      }
      const year = filters["Год выпуска"];
      if (year && year !== "Все года" && car.year !== year) {
        return false;
      }
      const price = filters["Цена, руб."];
      if (price && price !== "Любая" && !inRange(parsePrice(car.price), price)) {
        return false;
      }
      return true;
    });
  }, [cars, filters, applied]);

  const displayedFound = applied ? filteredCars.length.toLocaleString("ru-RU") : found;

  return (
    <section id={id} className="mx-auto max-w-[1500px] px-4 py-8 md:px-8">
      <div className="rounded-3xl bg-card p-5 md:p-10">
        <h2 className="text-2xl font-bold md:text-4xl">{title}</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {fields.map((f) => (
            <FormSelect
              key={f.label}
              label={f.label}
              value={filters[f.label] ?? f.placeholder}
              placeholder={f.placeholder}
              options={getOptions(f.label, cars, f.placeholder)}
              onChange={(v) => {
                setFilters((prev) => ({ ...prev, [f.label]: v }));
                setApplied(false);
              }}
            />
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {displayedFound && (
            <p className="text-sm text-muted-foreground">
              Найдено автомобилей: <span className="font-semibold text-primary">{displayedFound}</span>
            </p>
          )}
          <button
            type="button"
            onClick={() => setApplied(true)}
            className="h-11 rounded-full bg-primary px-10 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 md:ml-auto md:min-w-[260px]"
          >
            Поиск
          </button>
        </div>

        {brands && (
          <div className="mt-6 flex flex-wrap gap-3">
            {brands.map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => {
                  setFilters((prev) => ({ ...prev, "Марка": b }));
                  setApplied(true);
                }}
                className="rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold transition-colors hover:border-primary"
              >
                {b}
              </button>
            ))}
          </div>
        )}

        <div className="mt-6">
          <CarrouselArrows />
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filteredCars.map((car) => (
            <CarCard key={car.title} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}
