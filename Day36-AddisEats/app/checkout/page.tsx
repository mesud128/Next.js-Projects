"use client";

import {
  useState,
} from "react";

import Link from "next/link";

import { useCartStore } from "../../lib/store";

type FormData = {
  name: string;
  phone: string;
  address: string;
};

export default function CheckoutPage() {
  const items =
    useCartStore(
      (state) => state.items
    );

  const clearCart =
    useCartStore(
      (state) =>
        state.clearCart
    );

  const [form, setForm] =
    useState<FormData>({
      name: "",
      phone: "",
      address: "",
    });

  const [submitted, setSubmitted] =
    useState(false);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const {
      name,
      value,
    } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (
      !form.name ||
      !form.phone ||
      !form.address
    ) {
      alert(
        "Please fill in all fields."
      );

      return;
    }

    setSubmitted(true);

    clearCart();
  }

  if (
    items.length === 0 &&
    !submitted
  ) {
    return (
      <section className="message">
        <h2>
          Your cart is empty
        </h2>

        <Link
          className="button"
          href="/menu"
        >
          Go to Menu
        </Link>
      </section>
    );
  }

  if (submitted) {
    return (
      <section className="message">
        <p className="eyebrow">
          THANK YOU
        </p>

        <h2>
          Order complete
        </h2>

        <p>
          Thank you, {form.name}.
          Your order has been
          received.
        </p>

        <Link
          className="button"
          href="/menu"
        >
          Back to Menu
        </Link>
      </section>
    );
  }

  return (
    <section className="checkout page">
      <p className="eyebrow">
        CHECKOUT
      </p>

      <h2>
        Delivery details
      </h2>

      <form
        onSubmit={handleSubmit}
      >
        <label>
          Name

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </label>

        <label>
          Phone

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="09..."
          />
        </label>

        <label>
          Address

          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Addis Ababa"
          />
        </label>

        <button
          className="button"
          type="submit"
        >
          Place Order
        </button>
      </form>
    </section>
  );
}