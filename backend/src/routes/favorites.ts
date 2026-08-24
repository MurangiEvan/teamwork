import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../config/prisma';
import { authMiddleware, AuthenticatedRequest } from '../middleware/auth';

const router = Router();

const favoriteSchema = z.object({ laboratoryId: z.string() });

router.get('/', authMiddleware, async (req: AuthenticatedRequest, res, next) => {
  try {
    const favorites = await prisma.favorite.findMany({ where: { userId: req.user!.id }, include: { laboratory: true } });
    res.json(favorites);
  } catch (error) {
    next(error);
  }
});

router.post('/', authMiddleware, async (req: AuthenticatedRequest, res, next) => {
  try {
    const body = favoriteSchema.parse(req.body);
    const favorite = await prisma.favorite.create({
      data: { userId: req.user!.id, laboratoryId: body.laboratoryId },
    });
    res.status(201).json(favorite);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', authMiddleware, async (req: AuthenticatedRequest, res, next) => {
  try {
    await prisma.favorite.delete({ where: { id: req.params.id } });
    res.json({ message: 'Favorite removed' });
  } catch (error) {
    next(error);
  }
});

export default router;
