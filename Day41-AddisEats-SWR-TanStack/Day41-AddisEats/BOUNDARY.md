# Server/client boundary — Day 41 Addis Eats

| Component | Side | Reason |
|---|---|---|
| `app/layout.js` | Server | Shared shell; composes client leaves. |
| `app/page.js` | Server | Reads public specials and renders HTML. |
| `app/menu/page.js` | Server | Reads data directly; does not fetch its own API. |
| `app/menu/layout.js` | Server | Static nested sidebar shell. |
| `components/DishList.js` | Client | Owns selected category state. |
| `components/CategoryBar.js` | Client | Needs click handlers. |
| `components/DishCard.js` | Server | Renders dish markup; the small `AddToCartButton` child handles the click. |
| `components/AddToCartButton.js` | Client | Owns the add-to-cart click handler. |
| `components/DishDetailActions.js` | Client | Writes to the cart store. |
| `components/CartContents.js` | Client | Reads/updates browser-only cart state. |
| `components/CartHydration.js` | Client | Rehydrates Zustand after mount to avoid SSR mismatch. |
| `components/CheckoutForm.js` | Client leaf | Uses `useActionState` and pending state; the action itself runs on the server. |
| `components/DemoSessionButton.js` | Client leaf | Starts the demo session on click. |
| `components/CancelOrderButton.js` | Client leaf | Submits cancellation action. |
| `app/actions.js` | Server action module | Validates and checks session/ownership on the server. |
| `app/api/**/route.js` | Server | HTTP endpoints and validation. |

## Rule
Keep pages and layouts server-rendered unless browser state, effects, or event handlers require a client component. Keep `"use client"` on the smallest possible leaf.
