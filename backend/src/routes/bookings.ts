import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../config/prisma';
import { authMiddleware, AuthenticatedRequest } from '../middleware/auth';
import { MANAGEMENT_ROLES, requireRoles } from '../middleware/roles';

const router = Router();

const bookingSchema = z.object({
  laboratoryId: z.string(),
  serviceId: z.string(),
  bookingDate: z.string(),
  bookingTime: z.string(),
});

router.get('/', authMiddleware, async (req: AuthenticatedRequest, res, next) => {
  try {
    const isManager = MANAGEMENT_ROLES.includes(req.user!.role as typeof MANAGEMENT_ROLES[number]);
    const bookings = await prisma.booking.findMany({
      where: isManager ? undefined : { userId: req.user!.id },
      include: { user: true, laboratory: true, service: true },
      orderBy: { createdAt: 'desc' },
    });
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

router.patch('/:id/status', authMiddleware, requireRoles(...MANAGEMENT_ROLES), async (req, res, next) => {
  try {
    const status = z.object({ status: z.enum(['PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED']) }).parse(req.body);
    const booking = await prisma.booking.update({
      where: { id: String(req.params.id) },
      data: { status: status.status },
    });
    res.json(booking);
  } catch (error) {
    next(error);
  }
});

export default router;
