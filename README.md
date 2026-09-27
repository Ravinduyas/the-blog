# Down South Ceylon

A travel blog for Sri Lanka's south coast, in three parts:

| Folder      | What it is                            | Dev port |
| ----------- | ------------------------------------- | -------- |
| `frontend/` | The public blog readers see           | 3000     |
| `backend/`  | Articles API (Express + MongoDB)      | 4000     |
| `admin/`    | Editorial panel for writing/publishing| 3100     |

Articles live in MongoDB and are written through the admin panel. The blog reads
them from the API at runtime; if the API is unreachable it falls back to the
articles bundled at build time, so an outage shows slightly stale content rather
than an empty page.

## First run

MongoDB must be running (it is installed as a Windows service on this machine and
listens on `127.0.0.1:27017`).

```bash
npm run install:all          # installs all three packages

cp backend/.env.example backend/.env
cp admin/.env.example admin/.env
cp frontend/.env.example frontend/.env

npm run seed                 # creates the first admin + imports the 18 original articles
npm run dev                  # starts API, blog and admin together
```

Then open:

- Blog — http://localhost:3000
- Admin — http://localhost:3100

Sign in with the credentials from `backend/.env` (`SEED_ADMIN_EMAIL` /
`SEED_ADMIN_PASSWORD`). **Change that password from the My account page before
this goes anywhere public.**

`npm run seed` is safe to re-run — it skips articles whose slug already exists, so
it will never overwrite edits made in the panel. Pass `-- --force` to reset every
seeded article back to the original text.

## Publishing an article

1. **Articles → New article.**
2. Fill in the title, category, excerpt and body sections. Inline links use
   `[Hello Rent](https://hellorentsrilanka.com/)` and render as real links on the
   site — this is how partner businesses earn their backlink. The partners are
   listed in `frontend/src/data/partners.ts`.
3. Pick a **visual type** in Card design. Two of the five frame a photograph
   inside the tile (`destination split`, `laptop mockup`, from the *Tile image*
   field); the other three are typographic tiles that use the article's **Hero
   image** as a full-bleed backdrop when one is set, and fall back to the flat
   tile colour when it is not. The live preview shows exactly what the grid will
   show, so a missing image is visible before you publish, not after.
4. **Save draft** keeps it hidden from the site. **Publish** makes it live
   immediately — the blog picks it up on the next page load.

Only one article can hold the hero slot. Turning on *Feature as the hero* releases
whichever article held it before.

## Roles

- **admin** — every article, plus the Team page for adding and removing writers.
- **author** — creates, edits and publishes their own articles only. Other
  people's articles are visible but read-only.

An admin cannot demote, deactivate or delete their own account, and the last
remaining admin cannot be removed — so the panel can't be locked out.

## API

Public, no auth:

| Method | Path               | Purpose                                     |
| ------ | ------------------ | ------------------------------------------- |
| GET    | `/api/health`      | Liveness check                              |
| GET    | `/api/meta`        | Category and visual-type options            |
| GET    | `/api/posts`       | Published articles, in the blog's own shape |
| GET    | `/api/posts/:slug` | One published article                       |

Requires a bearer token:

| Method | Path                            | Notes                     |
| ------ | ------------------------------- | ------------------------- |
| POST   | `/api/auth/login`               | Returns the token         |
| GET    | `/api/auth/me`                  |                           |
| POST   | `/api/auth/change-password`     |                           |
| GET    | `/api/admin/posts`              | Drafts included           |
| POST   | `/api/admin/posts`              |                           |
| GET    | `/api/admin/posts/:id`          |                           |
| PUT    | `/api/admin/posts/:id`          | Author: own articles only |
| PATCH  | `/api/admin/posts/:id/status`   | Publish / unpublish       |
| DELETE | `/api/admin/posts/:id`          | Author: own articles only |
| GET    | `/api/admin/users`              | Admin only                |
| POST   | `/api/admin/users`              | Admin only                |
| PUT    | `/api/admin/users/:id`          | Admin only                |
| DELETE | `/api/admin/users/:id`          | Admin only                |

In development both Vite apps proxy `/api` to `http://localhost:4000`, so nothing
crosses origins locally. In production set `VITE_API_URL` in `frontend/.env` and
`admin/.env` to the deployed API origin, and add both site origins to
`CORS_ORIGINS` in `backend/.env`.

## Before deploying

- Set a long random `JWT_SECRET` in `backend/.env`. Rotating it signs everyone out.
- Change the seeded admin password.
- Point `MONGODB_URI` at the production database and make sure it is not exposed
  to the internet.
- Set `CORS_ORIGINS` to the real site and admin origins — the wildcard is never used.
- Keep the admin panel off search engines; `admin/index.html` already sends
  `noindex, nofollow`.

## Useful commands

```bash
npm run dev          # all three, colour-coded in one terminal
npm run dev:api      # just the API
npm run build        # typecheck + build everything
npm run lint         # typecheck everything
npm run seed         # import the original articles / create the first admin
```
