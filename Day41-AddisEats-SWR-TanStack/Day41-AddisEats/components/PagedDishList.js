"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { fetcher } from "../lib/fetcher";
import DishCard from "./DishCard";

const PAGE_SIZE = 4;
const DISHES_STALE_TIME = 60_000;

export default function PagedDishList({ page, initialPageData }) {
  const router = useRouter();
  const query = useQuery({
    queryKey: ["dishes", "page", page, PAGE_SIZE],
    queryFn: () => fetcher(`/api/dishes?page=${page}&limit=${PAGE_SIZE}`),
    initialData: page === 1 ? initialPageData : undefined,
    staleTime: DISHES_STALE_TIME,
    placeholderData: keepPreviousData,
  });
  const result = query.data || initialPageData;
  const goToPage = (nextPage) => router.push(`/menu?page=${nextPage}`);

  return (
    <section className="panel">
      <h2>Browse all dishes <span className="tech-label">TanStack Query · pagination</span></h2>
      <p className="muted">Query key: ["dishes", "page", {page}, {PAGE_SIZE}] · fresh for 60 seconds.</p>
      {query.isError ? <p className="error">Could not load dishes: {query.error.message}</p> : null}
      {query.isFetching ? <p className="muted">Updating this page… previous results stay visible.</p> : null}
      <div className="grid">{(result?.dishes || []).map((dish) => <DishCard key={dish.id} dish={dish} />)}</div>
      <div className="pagination">
        <button type="button" onClick={() => goToPage(page - 1)} disabled={page <= 1}>← Previous</button>
        <span>Page {result?.page || page} of {result?.totalPages || 1}</span>
        <button type="button" onClick={() => goToPage(page + 1)} disabled={page >= (result?.totalPages || 1)}>Next →</button>
      </div>
    </section>
  );
}
