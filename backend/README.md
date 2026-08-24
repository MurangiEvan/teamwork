# Backend

This Express + Prisma API powers authentication, laboratory discovery, services, bookings, reviews, and favorites for Lab Locator.

## Scripts

- `npm run dev` — start the API locally
- `npm run build` — compile TypeScript
- `npm start` — run the compiled build

## Database

1. Create a PostgreSQL database.
2. Update `.env` with `DATABASE_URL`.
3. Run `npx prisma migrate dev --name init`.
4. Run `npx prisma generate`.
