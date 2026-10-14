# Addis Eats — Day 41

A small Next.js App Router food-ordering project demonstrating client-side data fetching with **SWR** and **TanStack Query**.

## Features

- Server-rendered menu and first page of dishes.
- Debounced SWR search (300 ms), conditional `null` key, and `keepPreviousData`.
- Server-rendered order detail passed to SWR as `fallbackData`, then polled every five seconds.
- TanStack Query pagination with the page in the URL and previous-page data kept visible.
- `DATA.md` explains every query key, refresh rule, and `staleTime` choice.

## Run locally

```bash
npm install
npm run dev
```

On Windows PowerShell, if `npm` is blocked by execution policy, use `npm.cmd install` and `npm.cmd run dev`.

Open `http://localhost:3000`, start a demo session, add dishes to the cart, and place an order. Open **My orders → View live status** to see SWR polling. On **Menu**, try search and change pages; the URL updates to `/menu?page=2`.

## Important files

- `lib/fetcher.js` — shared JSON fetcher
- `components/OrderStatus.js` — SWR polling with server fallback data
- `components/MenuSearch.js` — debounced SWR search
- `components/PagedDishList.js` — TanStack Query page cache
- `components/QueryProvider.js` — TanStack Query provider
- `DATA.md` — query-key and freshness rationale

This is a teaching/demo app. Orders are stored in process memory, so restarting the Next.js server clears them; use a database for a production app.
