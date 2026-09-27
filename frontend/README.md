# Down South Ceylon — public blog

The reader-facing blog. See the root `README.md` for the full setup (API, admin panel, seeding).

```bash
npm install
npm run dev      # http://localhost:3000, proxies /api to the backend on :4000
npm run build    # production build into dist/
npm run lint     # typecheck
```

Articles load from the API and fall back to `src/data/blogPosts.ts` when it is unreachable.
Partner businesses live in `src/data/partners.ts`.
