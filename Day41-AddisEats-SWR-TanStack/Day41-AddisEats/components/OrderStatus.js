"use client";

import useSWR from "swr";
import { fetcher } from "../lib/fetcher";

export default function OrderStatus({ id, initialOrder }) {
  const { data, error, isLoading, isValidating } = useSWR(`/api/orders/${id}`, fetcher, {
    fallbackData: { order: initialOrder },
    refreshInterval: 5000,
    revalidateOnFocus: true,
  });
  const order = data?.order || initialOrder;

  if (error && !order) return <p className="error">Could not load this order: {error.message}</p>;
  if (isLoading && !order) return <p>Loading order…</p>;

  return (
    <article className="panel">
      <h2>{order.id}</h2>
      <p><strong>Status:</strong> <span className="status-pill">{order.status}</span></p>
      <p>{order.customerName} · {order.address}</p>
      <ul>{order.items.map((item) => <li key={item.id}>{item.name} × {item.quantity} — {(item.price * item.quantity).toLocaleString("en-US")} ETB</li>)}</ul>
      <p><strong>Total: {order.total.toLocaleString("en-US")} ETB</strong></p>
      <p className="muted">SWR refreshes this order every five seconds. {isValidating ? "Checking for updates…" : "Last status shown from the cache/server response."}</p>
      {error ? <p className="error">Refresh failed; showing the last available order data.</p> : null}
    </article>
  );
}
