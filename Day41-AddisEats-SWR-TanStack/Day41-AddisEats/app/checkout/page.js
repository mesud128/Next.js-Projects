import { getSessionUser } from "../../lib/session";
import CheckoutForm from "../../components/CheckoutForm";

export const dynamic = "force-dynamic";

export default async function CheckoutPage() {
  const user = await getSessionUser();
  return (
    <main className="container">
      <h1>Checkout</h1>
      {!user ? <section className="panel"><p>Start a demo session using the button in the header before placing an order.</p></section> : <CheckoutForm />}
    </main>
  );
}
