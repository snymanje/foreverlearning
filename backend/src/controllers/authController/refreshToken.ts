import { Request, Response } from 'express';
import tokenService from '../../services/tokenService';

export default async (req: Request, res: Response): Promise<void> => {
  const refreshToken = await tokenService.getNewAccessToken(res.locals.refreshToken);

  res.cookie('token', refreshToken, {
    httpOnly: true
  });
  res.status(200).json({
    status: 'Successfull',
    message: 'Reissued access token.'
  });
};
