"use client";

import { useCartStore } from "../lib/cart-store";

export default function AddToCartButton({ dish }) {
  const addItem = useCartStore((state) => state.addItem);
  return <button type="button" onClick={() => addItem(dish)}>Add to cart</button>;
}
