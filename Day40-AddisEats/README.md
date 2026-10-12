# Day 40 — Addis Eats

## Run
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Routes
- `/`, `/menu`, `/menu/[id]`, `/cart`, `/checkout`, `/orders`
- `GET /api/dishes`
- `GET /api/dishes/53322`
- `POST /api/orders`
- `POST /api/demo-session` creates a classroom demo session cookie.

## Test API
```bash
npm run build
npm start
curl -i http://localhost:3000/api/dishes
curl -i http://localhost:3000/api/dishes/53322
curl -i http://localhost:3000/api/dishes/unknown
curl -i -X POST http://localhost:3000/api/orders -H "Content-Type: application/json" -d "{}"
```
Start the demo session in the website before checkout or POSTing an order. With a session, invalid orders return 422 with `fieldErrors`; a successful order returns 201.

Zustand persists the cart under `addis-eats-cart`; successful checkout clears it. Zod validates input. Orders use temporary in-memory storage and reset when the server restarts.
