# Production Failure Checks

Run `npm run build`, then `npm start`.

1. **Slow connection:** use DevTools Slow 3G and visit `/menu`; confirm the loading UI is shown when a segment suspends.
2. **Thrown error:** temporarily throw an error in a test component and confirm the nearest `error.js` offers retry; remove the test error afterward.
3. **Unknown ID:** visit `/menu/not-a-dish` and request `/api/dishes/not-a-dish`; the page should show not-found and API should return 404.
4. **Invalid POST:** without a session expect 401. Start the demo session, then POST `{}` to `/api/orders`; expect 422 with `fieldErrors`.
5. **JavaScript disabled:** refresh `/`; public content should render, though interactive cart and forms need JavaScript.
6. **Bundle secrets:** search `.next/static` for API keys/private environment values; none should be present.
