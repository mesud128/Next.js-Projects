# Day 41 — Data fetching decisions

This project deliberately uses **SWR for order polling and menu search** and **TanStack Query for paged browsing**. The two libraries are not used for the same screen/query: that keeps the examples clear and demonstrates the library APIs covered in the Day 41 lesson.

## SWR queries

| Screen | Exact SWR key | When it fetches / refreshes | `staleTime` decision |
|---|---|---|---|
| Live order status `/orders/[id]` | `` `/api/orders/${id}` `` | Fetches after hydration, polls every `5_000` ms, and revalidates on tab focus. The server-rendered order is passed as `fallbackData`, so the first paint has real data and no initial spinner. | SWR does not use TanStack Query's `staleTime` option. Polling interval is the explicit freshness rule for this live status. |
| Menu search | `` debouncedTerm ? `/api/dishes?q=${encodeURIComponent(debouncedTerm)}` : null `` | `useDebouncedValue` waits 300 ms after the last keystroke. An empty term gives `null`, so SWR does not send an empty search request. `keepPreviousData: true` keeps the previous results while a new key is loading. | Not applicable to SWR. Search results are user-driven and the key changes when the debounced term changes; no separate stale-time window is needed for this exercise. |

## TanStack Query

| Screen | Exact `queryKey` | `staleTime` | Justification |
|---|---|---:|---|
| Paged menu | `['dishes', 'page', page, PAGE_SIZE]` | `60_000` ms | Dish catalogue data changes infrequently. One minute avoids refetching on every navigation back to a page while still allowing updates after a short period. Including both page and page size means each distinct result set has its own cache entry. |

Paged requests use `placeholderData: keepPreviousData` so the previous page stays visible while the next page is fetched. The current page is stored in the URL query string (`/menu?page=2`) so it can be bookmarked or shared. The first page is server-rendered and supplied as TanStack Query `initialData`.

## Shared fetcher and error behavior

`lib/fetcher.js` is the shared fetcher for both libraries. It rejects non-2xx responses so errors reach each hook instead of silently treating an error response as valid data.

## Why the server and client are combined

- `/menu` reads the dish catalogue on the server and seeds page 1.
- `/orders/[id]` reads the order on the server and passes it as SWR `fallbackData`.
- SWR then handles browser-only work: polling and type-ahead search.
- TanStack Query handles page-specific cache entries for browsing.

`staleTime` belongs to TanStack Query; SWR uses options such as `refreshInterval`, `fallbackData`, and `keepPreviousData` instead. They are documented separately rather than pretending both libraries share the same configuration API.
