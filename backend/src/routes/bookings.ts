import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../config/prisma';
import { authMiddleware, AuthenticatedRequest } from '../middleware/auth';

const router = Router();

const bookingSchema = z.object({
  laboratoryId: z.string(),
  serviceId: z.string(),
  bookingDate: z.string(),
  bookingTime: z.string(),
});

router.get('/', authMiddleware, async (req: AuthenticatedRequest, res, next) => {
  try {
    const bookings = await prisma.booking.findMany({ where: { userId: req.user!.id } });
    res.json(bookings);
  } catch (error) {
    next(error);
  }
});

router.post('/', authMiddleware, async (req: AuthenticatedRequest, res, next) => {
  try {
    const body = bookingSchema.parse(req.body);
    const booking = await prisma.booking.create({
      data: {
        userId: req.user!.id,
        laboratoryId: body.laboratoryId,
        serviceId: body.serviceId,
        bookingDate: body.bookingDate,
        bookingTime: body.bookingTime,
      },
    });
    res.status(201).json(booking);
  } catch (error) {
    next(error);
  }
});

export default router;
