"use client";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <section className="message">
      <h2>
        Something went wrong.
      </h2>

      <p>
        We could not load the menu.
      </p>

      <button
        className="button"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </section>
  );
}