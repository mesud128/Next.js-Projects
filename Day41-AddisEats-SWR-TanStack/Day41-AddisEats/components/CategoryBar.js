"use client";

export default function CategoryBar({ categories, selected, onSelect }) {
  return (
    <div className="category-bar" aria-label="Filter menu by category">
      {["All", ...categories].map((category) => (
        <button key={category} type="button" className={selected === category ? "category active" : "category"} aria-pressed={selected === category} onClick={() => onSelect(category)}>{category}</button>
      ))}
    </div>
  );
}
