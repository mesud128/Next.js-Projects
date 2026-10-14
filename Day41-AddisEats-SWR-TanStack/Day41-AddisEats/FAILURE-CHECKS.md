# Day 41 failure checks

Run these against the production server after `npm.cmd run build` and `npm.cmd run start`.

1. **Slow connection:** DevTools → Network → Slow 3G, then open `/menu`; the menu loading fallback should be available when loading suspends.
2. **Thrown menu error:** temporarily throw an error in `app/menu/page.js`; verify `app/menu/error.js` renders and the shared header survives. Remove the throw afterward.
3. **Unknown dish:** open `/menu/not-a-dish`; expect the not-found UI, not a crash.
4. **Invalid order:** start a demo session and POST an invalid phone to `/api/orders`; expect HTTP 422 and `fieldErrors.phone`. Without a demo cookie, the endpoint correctly returns 401 first.
5. **JavaScript disabled:** disable JavaScript and submit checkout. The server action should still process the form. The hidden items field's fallback is one demo Doro Wat; with JavaScript enabled the current cart is submitted.
6. **Secret scan:** search browser-loaded files under `.next/static` for private keys or credentials. This demo has no API secrets. The demo session is only a classroom guard, not production authentication.

Also test ownership: cancellation must check the current session on the server. Never trust an owner ID supplied by the browser.
