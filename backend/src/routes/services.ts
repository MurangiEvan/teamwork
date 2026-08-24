import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../config/prisma';
import { authMiddleware, AuthenticatedRequest } from '../middleware/auth';

const router = Router();

const serviceSchema = z.object({
  laboratoryId: z.string(),
  serviceName: z.string().min(2),
  description: z.string().optional(),
  category: z.string().optional(),
  price: z.number().min(0),
  duration: z.string().optional(),
});

router.get('/', async (_req, res, next) => {
  try {
    const services = await prisma.service.findMany();
    res.json(services);
  } catch (error) {
    next(error);
  }
});

router.post('/', authMiddleware, async (req: AuthenticatedRequest, res, next) => {
  try {
    const body = serviceSchema.parse(req.body);
    const service = await prisma.service.create({ data: body });
    res.status(201).json(service);
  } catch (error) {
    next(error);
  }
});

export default router;
