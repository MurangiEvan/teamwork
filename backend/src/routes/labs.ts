import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../config/prisma';
import { authMiddleware, AuthenticatedRequest } from '../middleware/auth';
import { HttpError } from '../middleware/errorHandler';
import { MANAGEMENT_ROLES, requireRoles } from '../middleware/roles';

const router = Router();

const labSchema = z.object({
  labName: z.string().min(2),
  ownerId: z.string().optional(),
  email: z.string().email().optional().or(z.literal('')),
  phone: z.string().optional(),
  website: z.string().optional(),
  address: z.string().min(2),
  city: z.string().min(2),
  province: z.string().optional(),
  country: z.string().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  description: z.string().optional(),
  openingHours: z.string().optional(),
  closingHours: z.string().optional(),
});

router.get('/', async (_req, res, next) => {
  try {
    const labs = await prisma.laboratory.findMany({ include: { services: true, reviews: true } });
    res.json(labs);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const lab = await prisma.laboratory.findUnique({
      where: { id: req.params.id },
      include: { services: true, reviews: { include: { user: true } } },
    });
    if (!lab) throw new HttpError(404, 'Laboratory not found');
    res.json(lab);
  } catch (error) {
    next(error);
  }
});

router.post('/', authMiddleware, requireRoles(...MANAGEMENT_ROLES), async (req: AuthenticatedRequest, res, next) => {
  try {
    const body = labSchema.parse(req.body);
    const lab = await prisma.laboratory.create({
      data: {
        ownerId: req.user!.id,
        labName: body.labName,
        email: body.email || null,
        phone: body.phone || null,
        website: body.website || null,
        address: body.address,
        city: body.city,
        province: body.province || null,
        country: body.country || null,
        latitude: body.latitude || null,
        longitude: body.longitude || null,
        description: body.description || null,
        openingHours: body.openingHours || null,
        closingHours: body.closingHours || null,
      },
    });
    res.status(201).json(lab);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', authMiddleware, requireRoles(...MANAGEMENT_ROLES), async (req, res, next) => {
  try {
    const body = labSchema.partial().parse(req.body);
    const lab = await prisma.laboratory.update({ where: { id: String(req.params.id) }, data: body });
    res.json(lab);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', authMiddleware, requireRoles(...MANAGEMENT_ROLES), async (req, res, next) => {
  try {
    await prisma.laboratory.delete({ where: { id: String(req.params.id) } });
    res.json({ message: 'Laboratory deleted' });
  } catch (error) {
    next(error);
  }
});

export default router;
