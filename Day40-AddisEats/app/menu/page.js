import {dishes} from "@/lib/dishes";
import DishCard from "@/components/DishCard";
export const revalidate=300;
export default function Menu(){return <main className="container"><h1>Our menu</h1><p>Sample prices are in Ethiopian birr (ETB).</p><div className="grid">{dishes.map(d=><DishCard key={d.id} dish={d}/>)}</div></main>;}
