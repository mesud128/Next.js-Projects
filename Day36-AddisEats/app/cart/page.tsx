"use client";

import Link from "next/link";

import { mealPrice } from "../../lib/api";

import { useCartStore } from "../../lib/store";

export default function CartPage() {
  const items =
    useCartStore(
      (state) => state.items
    );

  const removeItem =
    useCartStore(
      (state) =>
        state.removeItem
    );

  const clearCart =
    useCartStore(
      (state) =>
        state.clearCart
    );

  const total =
    items.reduce(
      (sum, item) =>
        sum + mealPrice(item),
      0
    );

  if (items.length === 0) {
    return (
      <section className="message">
        <h2>
          Your cart is empty
        </h2>

        <p>
          Add a dish from the menu
          first.
        </p>

        <Link
          className="button"
          href="/menu"
        >
          Browse Menu
        </Link>
      </section>
    );
  }

  return (
    <section className="page">
      <p className="eyebrow">
        YOUR ORDER
      </p>

      <h2>
        Cart
      </h2>

      <div className="cart">
        {items.map(
          (item) => (
            <div
              className="cart-item"
              key={item.idMeal}
            >
              <img
                src={
                  item.strMealThumb
                }
                alt={item.strMeal}
              />

              <div>
                <h3>
                  {item.strMeal}
                </h3>

                <p>
                  {mealPrice(item)} ETB
                </p>
              </div>

              <button
                className="remove"
                onClick={() =>
                  removeItem(
                    item.idMeal
                  )
                }
              >
                Remove
              </button>
            </div>
          )
        )}

        <div className="cart-total">
          Total: {total} ETB
        </div>

        <button
          className="button secondary"
          onClick={clearCart}
        >
          Clear Cart
        </button>

        <Link
          className="button"
          href="/checkout"
        >
          Checkout
        </Link>
      </div>
    </section>
  );
}