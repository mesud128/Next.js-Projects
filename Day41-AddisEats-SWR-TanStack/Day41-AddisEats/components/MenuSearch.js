"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../lib/fetcher";
import DishCard from "./DishCard";

function useDebouncedValue(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}

export default function MenuSearch({ initialDishes }) {
  const [term, setTerm] = useState("");
  const debouncedTerm = useDebouncedValue(term, 300);
  const key = debouncedTerm ? `/api/dishes?q=${encodeURIComponent(debouncedTerm)}` : null;
  const { data, error, isLoading, isValidating } = useSWR(key, fetcher, {
    keepPreviousData: true,
    revalidateOnFocus: false,
  });
  const visibleDishes = debouncedTerm ? (data?.dishes || []) : initialDishes;

  return (
    <section className="panel">
      <h2>Find a dish <span className="tech-label">SWR · debounced search</span></h2>
      <label htmlFor="dish-search">Search by name, category or description</label>
      <input id="dish-search" value={term} onChange={(event) => setTerm(event.target.value)} placeholder="Try tibs, beef, vegetarian…" />
      <p className="muted">Waits 300 ms after typing. An empty search uses a null SWR key, so it sends no search request.</p>
      {error ? <p className="error">Search failed: {error.message}</p> : null}
      {isLoading ? <p>Searching…</p> : null}
      {isValidating && !isLoading ? <p className="muted">Updating results…</p> : null}
      {visibleDishes.length ? <div className="grid">{visibleDishes.map((dish) => <DishCard key={dish.id} dish={dish} />)}</div> : debouncedTerm && !isLoading ? <p>No dishes match “{debouncedTerm}”.</p> : null}
    </section>
  );
}
