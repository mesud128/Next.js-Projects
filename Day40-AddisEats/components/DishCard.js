"use client";
import Link from "next/link";
import {useCartStore} from "@/lib/cart-store";
export default function DishCard({dish}){const add=useCartStore(s=>s.addItem);return <article className="card"><Link href={"/menu/"+dish.id}><img src={dish.image} alt={dish.name}/></Link><div className="pad"><small>{dish.category}</small><h3>{dish.name}</h3><p>{dish.description}</p><b>{dish.price} ETB</b><button onClick={()=>add(dish)}>Add to cart</button></div></article>;}
