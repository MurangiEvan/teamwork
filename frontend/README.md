# Frontend

This Next.js app provides the public-facing lab discovery experience, search UI, authentication entry points, and booking-oriented pages.

## Scripts

- `npm run dev` — start the local development server
- `npm run build` — build for production
- `npm run lint` — run ESLint

## Environment

Set `NEXT_PUBLIC_API_URL` to the backend API base URL, including `/api`:

```dotenv
NEXT_PUBLIC_API_URL=https://your-backend.example.com/api
```

For local development, use `http://localhost:5000/api`. Configure the production value in the frontend hosting provider before building.
