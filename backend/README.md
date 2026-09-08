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

## Management roles

New accounts are created as `USER`. Only `ADMIN` and `LAB_MANAGER` accounts can create, update, or delete laboratories and services, view all bookings, or update booking statuses. Regular users can still browse labs, create bookings, and view their own bookings.

Promote an existing account from the backend directory:

```bash
npm run promote-user -- user@example.com ADMIN
```

Use `LAB_MANAGER` instead of `ADMIN` for a lab operations account. Role changes are intentionally kept out of public registration.
