import { IUser, ITokens } from '../../interfaces/user.interfaces';
import jwt from 'jsonwebtoken';
import config from '../../config/config';

export default async (user: IUser): Promise<ITokens> => {
  const { _id, email, role, method } = user;

  const access_token = await jwt.sign({ _id, email, role, method }, config.tokenSecret, {
    expiresIn: config.tokenExpiresIn
  });

  const refresh_token = await jwt.sign({ _id, email, role, method }, config.refreshTokenSecret, {
    expiresIn: config.refreshTokenExpiresIn
  });

  return {
    access_token,
    refresh_token
  };
};
