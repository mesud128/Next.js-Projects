import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="message">
      <h2>Page not found</h2>

      <p>
        The page you are looking for does not exist.
      </p>

      <Link className="button" href="/menu">
        Back to Menu
      </Link>
    </section>
  );
}