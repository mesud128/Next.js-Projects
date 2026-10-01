import Link from "next/link";

export default function HomePage() {
  return (
    <section className="hero">
      <p className="eyebrow">
        WELCOME TO ADDIS EATS
      </p>

      <h1>
        Good food, made simple.
      </h1>

      <p>
        Browse our menu, choose your favorite dish,
        and place your order.
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