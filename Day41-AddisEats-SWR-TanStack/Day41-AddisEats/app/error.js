"use client";

export default function GlobalError({ reset }) {
  return (
    <main className="container">
      <section className="panel">
        <h1>Something went wrong</h1>
        <p>The page could not be displayed. Try again.</p>
        <button onClick={() => reset()}>Try again</button>
      </section>
    </main>
  );
}
