"use client";
import Link from "next/link";
import {useCartStore} from "../lib/cart-store";
export default function CartContents(){const items=useCartStore(s=>s.items),remove=useCartStore(s=>s.removeItem),change=useCartStore(s=>s.changeQuantity);const total=items.reduce((n,i)=>n+i.price*i.quantity,0);if(!items.length)return <section className="panel"><h2>Your cart is empty</h2><Link href="/menu">Browse menu</Link></section>;return <div className="panel"><h2>Cart</h2>{items.map(i=><p key={i.id}>{i.name} — {i.price} ETB × {i.quantity} <button onClick={()=>change(i.id,i.quantity-1)}>-</button><button onClick={()=>change(i.id,i.quantity+1)}>+</button><button onClick={()=>remove(i.id)}>Remove</button></p>)}<h3>Total: {total} ETB</h3><Link href="/checkout">Checkout →</Link></div>;}
