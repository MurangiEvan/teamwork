import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '../config/prisma';
import { authMiddleware, AuthenticatedRequest } from '../middleware/auth';
import { HttpError } from '../middleware/errorHandler';
import { z } from 'zod';

const router = Router();

const registerSchema = z.object({
  fullname: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  phone: z.string().optional(),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const signToken = (user: { id: string; role: string; email: string }) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET is not configured');
  }

  return jwt.sign(user, secret, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' } as jwt.SignOptions);
};

const setAuthCookie = (res: any, token: string) => {
  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};

router.post('/register', async (req, res, next) => {
  try {
    const body = registerSchema.parse(req.body);
    const exists = await prisma.user.findUnique({ where: { email: body.email } });
    if (exists) throw new HttpError(409, 'User already exists');

    const password = await bcrypt.hash(body.password, 10);
    const user = await prisma.user.create({
      data: { fullname: body.fullname, email: body.email, password, phone: body.phone ?? null },
    });

    const token = signToken({ id: user.id, role: user.role, email: user.email });
    setAuthCookie(res, token);

    res.status(201).json({ user: { id: user.id, fullname: user.fullname, email: user.email, role: user.role } });
  } catch (error) {
    next(error);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const body = loginSchema.parse(req.body);
    const user = await prisma.user.findUnique({ where: { email: body.email } });
    if (!user) throw new HttpError(401, 'Invalid credentials');

    const valid = await bcrypt.compare(body.password, user.password);
    if (!valid) throw new HttpError(401, 'Invalid credentials');

    const token = signToken({ id: user.id, role: user.role, email: user.email });
    setAuthCookie(res, token);

    res.json({ user: { id: user.id, fullname: user.fullname, email: user.email, role: user.role } });
  } catch (error) {
    next(error);
  }
});

router.post('/logout', (_req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out' });
});

router.get('/me', authMiddleware, async (req: AuthenticatedRequest, res, next) => {
  try {
    res.json({ user: req.user });
  } catch (error) {
    next(error);
  }
});

router.post('/refresh', async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) throw new HttpError(401, 'Missing token');
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string; role: string; email: string };
    const tokenRefreshed = signToken(decoded);
    setAuthCookie(res, tokenRefreshed);
    res.json({ message: 'Token refreshed' });
  } catch (error) {
    next(error);
  }
});

export default router;
