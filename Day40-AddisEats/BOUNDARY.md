# Server / Client Boundary Map

## Server Components
- `app/layout.js`, `app/page.js`, `app/menu/page.js`, `app/menu/[id]/page.js`
- `app/cart/page.js`, `app/checkout/page.js`, `app/orders/page.js`

## Client Components
- `CartHydration.js`: rehydrates Zustand after initial browser render to avoid localStorage hydration mismatch.
- `DishCard.js`, `DishDetailActions.js`, `CartContents.js`: cart interaction.
- `CheckoutForm.js`: `useActionState`, pending state and clear-cart-after-success.
- `CancelOrderButton.js`, `DemoSessionButton.js`: browser interactions.
- `app/menu/error.js`, `app/error.js`: interactive retry UI.

## Server-only responsibilities
- `app/actions.js`: checkout and cancellation Server Actions.
- `app/api/**/route.js`: API Route Handlers.
- `lib/schema.js`: Zod validation.
- `lib/session.js`: reads HTTP-only demo cookie.
- `lib/orders.js`: temporary in-memory orders.
- `lib/dishes.js`: authoritative dish names and prices.

## Security boundary
Client input is untrusted. Validate on the server and look up dish prices from server data. The cancellation action checks session and order ownership on the server; hiding a button is not authorization.

**Demo limitation:** orders are held in process memory and reset on server restart. The demo session is not production authentication. Use a database and a real authentication provider for deployment.
