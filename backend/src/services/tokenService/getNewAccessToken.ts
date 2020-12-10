import { promisify } from 'util';
import User from '../../model/User';
import jwt from 'jsonwebtoken';
import config from '../../config/config';
import AppError from '../../utils/appError';

export default async (refreshToken: string): Promise<string> => {
  // verify the token
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const decoded: any = await promisify(jwt.verify)(refreshToken, config.refreshTokenSecret);

  // Check if user exists
  const loggedInUser = await User.findOne({ _id: decoded._id });
  if (!loggedInUser) {
    throw new AppError('User for this token nolonger exists, please register', 401);
  }
  // Only do this check if your is signup with local username and password
  // Check if the user changed his password.
  if (loggedInUser.method === 'local') {
    if (await loggedInUser.changedPasswordAfter(decoded.iat)) {
      throw new AppError('Password has changed, please log in again', 401);
    }
  }

  const { _id, email, role, method } = loggedInUser;
  const access_token = await jwt.sign({ _id, email, role, method }, config.tokenSecret, {
    expiresIn: process.env.TOKENEXPIRES
  });

  return access_token;
};
