"use client";

import { useMemo, useState } from "react";
import CategoryBar from "./CategoryBar";
import DishCard from "./DishCard";

export default function DishList({ dishes }) {
  const [selected, setSelected] = useState("All");
  const categories = useMemo(() => [...new Set(dishes.map((dish) => dish.category))], [dishes]);
  const visible = selected === "All" ? dishes : dishes.filter((dish) => dish.category === selected);
  return (<>
    <CategoryBar categories={categories} selected={selected} onSelect={setSelected} />
    <div className="grid">{visible.map((dish) => <DishCard key={dish.id} dish={dish} />)}</div>
    {visible.length === 0 ? <p>No dishes in this category.</p> : null}
  </>);
}
