"use client";
import {useCartStore} from "@/lib/cart-store";
export default function DishDetailActions({dish}){const add=useCartStore(s=>s.addItem);return <button onClick={()=>add(dish)}>Add to cart</button>;}
