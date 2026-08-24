import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../config/prisma';
import { authMiddleware, AuthenticatedRequest } from '../middleware/auth';

const router = Router();

const reviewSchema = z.object({
  laboratoryId: z.string(),
  rating: z.number().min(1).max(5),
  comment: z.string().optional(),
});

router.get('/:laboratoryId', async (req, res, next) => {
  try {
    const reviews = await prisma.review.findMany({
      where: { laboratoryId: req.params.laboratoryId },
      include: { user: true },
    });
    res.json(reviews);
  } catch (error) {
    next(error);
  }
});

router.post('/', authMiddleware, async (req: AuthenticatedRequest, res, next) => {
  try {
    const body = reviewSchema.parse(req.body);
    const review = await prisma.review.create({
      data: {
        userId: req.user!.id,
        laboratoryId: body.laboratoryId,
        rating: body.rating,
        comment: body.comment || null,
      },
    });
    res.status(201).json(review);
  } catch (error) {
    next(error);
  }
});

export default router;
