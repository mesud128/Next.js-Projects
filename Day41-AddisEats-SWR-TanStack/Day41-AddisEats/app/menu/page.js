import { dishes } from "../../lib/dishes";
import MenuSearch from "../../components/MenuSearch";
import PagedDishList from "../../components/PagedDishList";

const PAGE_SIZE = 4;
export const revalidate = 3600;

export default async function MenuPage({ searchParams }) {
  const params = await searchParams;
  const page = Math.max(1, Number.parseInt(params?.page || "1", 10) || 1);
  const totalPages = Math.max(1, Math.ceil(dishes.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PAGE_SIZE;
  const initialPageData = {
    dishes: dishes.slice(start, start + PAGE_SIZE),
    total: dishes.length,
    page: safePage,
    pageSize: PAGE_SIZE,
    totalPages,
    query: "",
  };
  return (
    <main className="container">
      <h1>Our menu</h1>
      <p>Sample prices are in Ethiopian birr (ETB). The server renders the first page; client queries handle search and paging.</p>
      <MenuSearch initialDishes={dishes} />
      <PagedDishList page={safePage} initialPageData={initialPageData} />
    </main>
  );
}
