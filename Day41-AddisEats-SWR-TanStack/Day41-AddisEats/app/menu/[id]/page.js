import {notFound} from "next/navigation";
import Link from "next/link";
import {dishes,getDish} from "../../../lib/dishes";
import DishDetailActions from "../../../components/DishDetailActions";
export function generateStaticParams(){return dishes.map(d=>({id:d.id}));}
export default async function DishPage({params}){const {id}=await params;const dish=getDish(id);if(!dish)notFound();return <main className="container"><img src={dish.image} alt={dish.name} width="520"/><h1>{dish.name}</h1><p>{dish.description}</p><b>{dish.price} ETB</b><DishDetailActions dish={dish}/><p><Link href="/menu">Back to menu</Link></p></main>;}
