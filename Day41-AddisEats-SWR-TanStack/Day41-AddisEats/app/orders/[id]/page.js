import { notFound } from "next/navigation";
import { getSessionUser } from "../../../lib/session";
import { findOrder } from "../../../lib/orders";
import OrderStatus from "../../../components/OrderStatus";

export const dynamic = "force-dynamic";

export default async function OrderDetailPage({ params }) {
  const { id } = await params;
  const user = await getSessionUser();
  const order = findOrder(id);
  if (!user || !order || order.ownerId !== user.id) notFound();

  // The server sends the order in the first HTML response; SWR starts polling after hydration.
  return <main className="container"><h1>Live order status</h1><p>Server-rendered order data, then client-side polling.</p><OrderStatus id={id} initialOrder={order} /></main>;
}
