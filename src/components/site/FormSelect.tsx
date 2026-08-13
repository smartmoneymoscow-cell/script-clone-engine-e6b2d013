import { useState } from "react";

export function FormSelect({
  label,
  value,
  placeholder,
  options,
  onChange,
}: {
  label: string;
  value: string;
  placeholder?: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  const [open] = useState(false);

  return (
    <label className="block">
      <span className="mb-2 block text-xs text-muted-foreground">{label}</span>
      <div className="relative flex h-12 items-center justify-between rounded-xl border border-input bg-surface px-4 text-sm transition-colors hover:border-primary/50">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
          aria-label={label}
          data-open={open}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span className="pointer-events-none truncate">{value || placeholder}</span>
        <span className="pointer-events-none text-muted-foreground">⌄</span>
      </div>
    </label>
  );
}
