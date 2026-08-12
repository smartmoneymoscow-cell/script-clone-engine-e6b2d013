import type { Car } from "@/data/cars";
import { CarCard, CarrouselArrows } from "./CarCard";

type Field = { label: string; placeholder: string; wide?: boolean };

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
  return (
    <section id={id} className="mx-auto max-w-[1500px] px-4 py-8 md:px-8">
      <div className="rounded-3xl bg-card p-5 md:p-10">
        <h2 className="text-2xl font-bold md:text-4xl">{title}</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {fields.map((f) => (
            <label key={f.label} className="block">
              <span className="mb-2 block text-xs text-muted-foreground">{f.label}</span>
              <div className="flex h-12 items-center justify-between rounded-xl border border-input bg-surface px-4 text-sm">
                <span>{f.placeholder}</span>
                <span className="text-muted-foreground">⌄</span>
              </div>
            </label>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {found && (
            <p className="text-sm text-muted-foreground">
              Найдено автомобилей: <span className="font-semibold text-primary">{found}</span>
            </p>
          )}
          <button className="h-11 rounded-full bg-primary px-10 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 md:ml-auto md:min-w-[260px]">
            Поиск
          </button>
        </div>

        {brands && (
          <div className="mt-6 flex flex-wrap gap-3">
            {brands.map((b) => (
              <span
                key={b}
                className="rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold"
              >
                {b}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6">
          <CarrouselArrows />
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cars.map((car) => (
            <CarCard key={car.title} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}
