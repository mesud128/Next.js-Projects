# Rendering Strategy

| Route | Strategy | Reason |
|---|---|---|
| `/` | Server page with client dish cards | Public content renders on the server; add-to-cart needs browser interaction. |
| `/menu` | Static/ISR (`revalidate = 300`) | Sample menu is public and changes infrequently. |
| `/menu/[id]` | Static params for known IDs; `notFound()` for unknown IDs | Public dish pages can be pre-rendered. |
| `/cart` | Server shell + Client Component | Zustand cart is persisted in browser localStorage. |
| `/checkout` | Server shell + Client form + Server Action | Form needs interactivity; validation and writes stay on server. |
| `/orders` | Dynamic server page | Reads session cookie and filters by owner. |
| `GET /api/dishes` | Route Handler | Returns the menu JSON. |
| `GET /api/dishes/[id]` | Route Handler | Returns a dish or HTTP 404. |
| `POST /api/orders` | Route Handler | Validates JSON; returns 201, 400, 401, or 422. |

Run `npm run build` and compare the route summary with this table.
