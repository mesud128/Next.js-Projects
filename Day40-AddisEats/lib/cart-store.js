"use client";
import {create} from "zustand";
import {persist} from "zustand/middleware";
export const useCartStore=create(persist((set)=>({
 items:[],
 addItem:dish=>set(s=>{const old=s.items.find(i=>i.id===dish.id);return {items:old?s.items.map(i=>i.id===dish.id?{...i,quantity:i.quantity+1}:i):[...s.items,{...dish,quantity:1}]};}),
 removeItem:id=>set(s=>({items:s.items.filter(i=>i.id!==id)})),
 changeQuantity:(id,q)=>set(s=>({items:q<1?s.items.filter(i=>i.id!==id):s.items.map(i=>i.id===id?{...i,quantity:q}:i)})),
 clearCart:()=>set({items:[]})
}),{name:"addis-eats-cart",skipHydration:true}));
