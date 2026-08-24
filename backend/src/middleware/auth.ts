import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { prisma } from '../config/prisma';
import { HttpError } from './errorHandler';

export interface AuthenticatedRequest extends Request {
  user?: { id: string; role: string; email: string };
}

export const authMiddleware = async (
  req: AuthenticatedRequest,
  _res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      throw new HttpError(401, 'Authentication required');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: string;
      role: string;
      email: string;
    };

    const user = await prisma.user.findUnique({ where: { id: decoded.id } });
    if (!user) {
      throw new HttpError(401, 'User not found');
    }

    req.user = { id: user.id, role: user.role, email: user.email };
    next();
  } catch (error) {
    next(error);
  }
};
