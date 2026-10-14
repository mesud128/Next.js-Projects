import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

export default function DishCard({ dish }) {
  return (
    <article className="card">
      <Link href={`/menu/${dish.id}`}><img src={dish.image} alt={dish.name} /></Link>
      <div className="pad">
        <small>{dish.category}</small>
        <h3><Link href={`/menu/${dish.id}`}>{dish.name}</Link></h3>
        <p>{dish.description}</p>
        <b>{dish.price.toLocaleString("en-US")} ETB</b>
        <AddToCartButton dish={dish} />
      </div>
    </article>
  );
}
