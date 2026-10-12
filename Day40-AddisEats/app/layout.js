import "./globals.css";
import Link from "next/link";
import CartHydration from "../components/CartHydration";
import DemoSessionButton from "../components/DemoSessionButton";
export const metadata={title:"Addis Eats",description:"Ethiopian favorites delivered with care."};
export default function RootLayout({children}){return <html lang="en"><body><CartHydration/><header><Link href="/">ADDIS EATS</Link><nav><Link href="/menu">Menu</Link> <Link href="/cart">Cart</Link> <Link href="/checkout">Checkout</Link> <Link href="/orders">My orders</Link> <DemoSessionButton/></nav></header>{children}<footer>Addis Eats · Day 40 Next.js project</footer></body></html>;}
