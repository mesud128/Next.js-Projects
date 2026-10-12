import Link from "next/link";
import {dishes} from "@/lib/dishes";
import DishCard from "@/components/DishCard";
export default function Home(){return <><section className="hero"><h1>Ethiopian favorites, delivered with care.</h1><p>Discover traditional dishes and build your order in a few clicks.</p><Link href="/menu">Explore menu →</Link></section><main className="container"><h2>Popular dishes</h2><div className="grid">{dishes.slice(0,3).map(d=><DishCard key={d.id} dish={d}/>)}</div></main></>;}
