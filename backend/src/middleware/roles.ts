import { NextFunction, Response } from 'express';
import { AuthenticatedRequest } from './auth';
import { HttpError } from './errorHandler';

export const MANAGEMENT_ROLES = ['ADMIN', 'LAB_MANAGER'] as const;

export const requireRoles = (...allowedRoles: readonly string[]) => (
  req: AuthenticatedRequest,
  _res: Response,
  next: NextFunction
) => {
  if (!req.user || !allowedRoles.includes(req.user.role)) {
    return next(new HttpError(403, 'Management permission required'));
  }

  next();
};
