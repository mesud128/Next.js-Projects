# Day 41 Addis Eats — Beginner Step-by-Step Guide

## 1. Extract and open the correct folder
Extract this ZIP and open the `Day41-AddisEats` folder in VS Code. The folder containing `package.json` is the project root. Keep `app`, `components`, and `lib` beside one another.

## 2. Install and start
In VS Code choose Terminal → New Terminal. Confirm the terminal path ends with `Day41-AddisEats`.

```cmd
npm.cmd install
npm.cmd run dev
```

Open `http://localhost:3000`. Use `npm.cmd` on Windows PowerShell if `npm` is blocked by execution policy.

## 3. Four decisions required by the assignment
1. **Folder tree:** the folders inside `app/` define the routes; `page.js` makes a route public. Shared helpers/components live in root `lib/` and `components/`.
2. **Nested layouts:** `app/layout.js` wraps the whole site; `app/menu/layout.js` adds a sidebar only to menu routes.
3. **Rendering strategy:** `/` is static; `/menu` uses ISR with `revalidate = 3600`; `/menu/[id]` uses `generateStaticParams`; `/cart` is browser-interactive; `/checkout` and `/orders` are dynamic because they read a cookie. See `STRATEGY.md`.
4. **Server/client boundary:** pages and layouts stay Server Components by default. Small interactive leaves use `"use client"`; see `BOUNDARY.md`.

## 4. Build in the required order
The full project is already assembled in this ZIP. If rebuilding from scratch, the assignment's six stages are:
1. Folder tree and layouts, with all routes reachable.
2. Server-rendered menu.
3. Dish route with `generateStaticParams()` and `notFound()`.
4. Client leaves for category selection and cart interactions.
5. Order API validation and `placeOrder` server action.
6. Loading/error/not-found files, strategy docs and boundary docs.

The instructor asks for `npm run build` after each stage. For this assembled project, run the final build below and address any build output before presenting.

## 5. Run the main user flow
1. Click **Start demo session** in the header.
2. Open **Menu**, filter by category, and add one or more dishes.
3. Open **Cart** and update quantities or remove an item.
4. Open **Checkout**, enter a name, phone and address, then place the order.
5. Open **My orders** and test cancellation.

## 6. Verify production, not only development
Stop the dev server with Ctrl+C, then run:

```cmd
npm.cmd run build
npm.cmd run start
```

Keep the production server running for the checks in `FAILURE-CHECKS.md`.

## 7. Verify endpoints
In a second terminal:

```cmd
curl http://localhost:3000/api/dishes
curl -i http://localhost:3000/api/dishes/not-a-dish
```

The unknown dish should return 404. `/api/orders` requires the demo cookie first; after starting a demo session, test an invalid Ethiopian phone number and expect HTTP 422 with `fieldErrors`.

## 8. The six failure checks
Follow `FAILURE-CHECKS.md`: slow connection, thrown menu error, unknown dish ID, invalid Ethiopian phone number, JavaScript disabled, and secret scan. Remove any temporary error you add during testing.

## 9. Day 35 comparison
Day 35 used React + Vite and manually wired routes/data fetching. Day 41 uses file-based routes and nested layouts, server rendering for public menu data, ISR/static params, and server actions/route handlers for writes and outside callers. The cart remains client-side because it belongs to the browser.

## 10. Separate capstone requirement
The Day 41 PDF also asks you to migrate your own capstone to Next.js, route by route, with its own `STRATEGY.md` and `BOUNDARY.md`. This ZIP covers the Addis Eats project only.
