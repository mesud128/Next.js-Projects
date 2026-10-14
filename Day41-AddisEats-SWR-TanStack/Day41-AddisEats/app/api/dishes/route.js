import { NextResponse } from "next/server";
import { dishes } from "../../../lib/dishes";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const term = (searchParams.get("q") || "").trim().toLowerCase();
  const page = Math.max(1, Number.parseInt(searchParams.get("page") || "1", 10) || 1);
  const pageSize = Math.min(12, Math.max(1, Number.parseInt(searchParams.get("limit") || "4", 10) || 4));
  const matching = term
    ? dishes.filter((dish) => `${dish.name} ${dish.category} ${dish.description}`.toLowerCase().includes(term))
    : dishes;
  const totalPages = Math.max(1, Math.ceil(matching.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * pageSize;
  return NextResponse.json({
    dishes: searchParams.has("page") ? matching.slice(start, start + pageSize) : matching,
    total: matching.length,
    page: safePage,
    pageSize,
    totalPages,
    query: term,
  });
}
