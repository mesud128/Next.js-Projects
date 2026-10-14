# Import paths

This version intentionally uses explicit relative imports such as `../../lib/dishes` instead of `@/lib/dishes`. It therefore does not require `jsconfig.json`, `tsconfig.json`, or an `@/*` alias to resolve these files. Keep `app`, `components`, and `lib` at the same project-root level.
