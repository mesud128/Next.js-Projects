import Link from "next/link";

export default function MenuLayout({ children }) {
  return (
    <div className="menu-layout">
      <aside className="menu-sidebar">
        <p className="eyebrow">Browse</p>
        <h2>Our kitchen</h2>
        <ul>
          <li><Link href="/menu">All dishes</Link></li>
          <li>Stews and wots</li>
          <li>Tibs</li>
          <li>Vegetarian</li>
          <li>Traditional</li>
        </ul>
      </aside>
      <section>{children}</section>
    </div>
  );
}
