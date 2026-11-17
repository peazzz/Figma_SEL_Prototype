import { useState } from "react";

// An empty selection represents "全部".
export function useCategoryFilter(options: readonly string[]) {
  const [selected, setSelected] = useState<string[]>([]);
  function toggle(value: string) {
    setSelected((current) => {
      if (value === "全部") return [];
      const next = current.includes(value) ? current.filter((item) => item !== value) : [...current, value];
      return next.length === options.length ? [] : next;
    });
  }
  return {
    toggle,
    matches: (value: string) => selected.length === 0 || selected.includes(value),
    isSelected: (value: string) => value === "全部" ? selected.length === 0 : selected.includes(value),
    label: selected.length ? selected.join("、") : "全部",
  };
}
