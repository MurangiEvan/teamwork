# Lab Locator

A production-ready full-stack lab locator experience with a Next.js frontend and an Express + Prisma backend.

## Structure

- frontend: Next.js app router, Tailwind CSS, shadcn-inspired UI patterns, auth pages, lab discovery flow.
- backend: Express.js API with Prisma, JWT auth, labs, services, bookings, reviews, and favorites.

## Local development

### Backend

1. Install PostgreSQL and create a database named `lab_locator`.
2. Update backend/.env with your local database URL.
3. Run:
   - `cd backend`
   - `npx prisma generate`
   - `npx prisma migrate dev --name init`
   - `npm run dev`

### Frontend

1. Run:
   - `cd frontend`
   - `npm run dev`

The frontend will be available at http://localhost:3000 and the API at http://localhost:5000/api.

## Deployment

- Frontend: deploy to Vercel using the frontend folder.
- Backend: deploy to Vercel using the backend folder and the provided vercel.json.
