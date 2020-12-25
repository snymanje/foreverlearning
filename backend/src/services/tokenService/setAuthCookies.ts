import { Response } from 'express';
import config from '../../config/config';
import { ITokens } from '../../interfaces/user.interfaces';

export default async (res: Response, tokens: ITokens): Promise<void> => {
  const refreshtokenArray = tokens.refresh_token.split('.');
  const [refreshTokenHeader, refreshTokenPayload, refreshTokenSignature] = refreshtokenArray;

  res.cookie('token', tokens.access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/'
  });
  res.cookie('refreshTokenSignature', refreshTokenSignature, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/'
  });
  res.cookie('refreshTokenPayload', `${refreshTokenHeader}.${refreshTokenPayload}`, {
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: Number(config.refreshCookieExpires)
  });
};
