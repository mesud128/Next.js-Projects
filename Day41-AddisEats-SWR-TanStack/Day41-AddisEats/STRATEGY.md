# Rendering strategy — Day 41 Addis Eats

| Route | Strategy | Reason |
|---|---|---|
| `/` | Static | Public landing page and specials do not depend on a visitor cookie. |
| `/menu` | ISR (`revalidate = 3600`) | Public dishes can be cached and refreshed hourly. |
| `/menu/[id]` | Static via `generateStaticParams` | Dish IDs are known at build time; unknown IDs call `notFound()`. |
| `/cart` | Client-interactive | Cart belongs to this browser and is persisted in Zustand/localStorage. |
| `/checkout` | Dynamic | The page reads a session cookie and uses a server action. |
| `/orders` | Dynamic | It reads the session cookie and filters by owner. |
| `/api/dishes` | Route handler | Provides JSON to callers outside the server-rendered menu. |
| `/api/orders` | Route handler | Validates incoming JSON server-side and returns honest status codes. |

## Layout nesting
- `app/layout.js`: shared header, navigation, cart hydration and footer.
- `app/menu/layout.js`: category sidebar for the menu route and dish detail route.

Compare this table with `npm.cmd run build`. If the output disagrees, investigate why instead of assuming the written strategy is correct.
