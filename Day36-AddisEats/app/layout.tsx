import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Addis Eats",
  description: "Simple food ordering application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container nav">
            <Link
              className="logo"
              href="/"
            >
              Addis Eats
            </Link>

            <nav>
              <Link href="/">
                Home
              </Link>

              <Link href="/menu">
                Menu
              </Link>

              <Link href="/cart">
                Cart
              </Link>

              <Link href="/checkout">
                Checkout
              </Link>
            </nav>
          </div>
        </header>

        <main className="container">
          {children}
        </main>

        <footer>
          Addis Eats - Food Ordering
        </footer>
      </body>
    </html>
  );
}