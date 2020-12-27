import { Request, Response } from 'express';

export default async (req: Request, res: Response): Promise<void> => {
  res.status(200).json({
    status: 'Successfull',
    message: 'My profile loaded',
    user: res.locals.jwtPayload
  });
};
