import {getSessionUser} from "../../lib/session";
import {listOrders} from "../../lib/orders";
import CancelOrderButton from "../../components/CancelOrderButton";
import Link from "next/link";
export const dynamic="force-dynamic";
export default async function Orders(){const user=await getSessionUser();const orders=user?listOrders(user.id):[];return <main className="container"><h1>My orders</h1>{!user?<p>Start a demo session from the navigation first.</p>:!orders.length?<p>No orders yet.</p>:orders.map(o=><article className="panel" key={o.id}><h2>{o.id}</h2><p>{o.customerName} · {o.address}</p><p>{o.items.map(i=>`${i.name} × ${i.quantity}`).join(", ")}</p><p>{o.items.reduce((n,i)=>n+i.price*i.quantity,0)} ETB</p><p><Link href={`/orders/${o.id}`}>View live status →</Link></p><CancelOrderButton id={o.id}/></article>)}</main>;}
