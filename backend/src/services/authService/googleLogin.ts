import User from '../../model/User';
import AppError from '../../utils/appError';
import GoogleUserDto from '../../dtos/GoogleUserDto';
import { IUser } from '../../interfaces/user.interfaces';
import authService from '../authService';

export default async (requestBody: GoogleUserDto): Promise<IUser> => {
  const { access_token } = requestBody;

  if (!access_token) throw new AppError('The google access token was not provided.', 400);

  const { sub } = await authService.getGoogleUser(access_token);

  // check if the current user exists in the DB
  const existingUser = await User.findOne({ googleId: sub });

  if (!existingUser) {
    throw new AppError('You have not registerd yet, please go to signup.', 401);
  }

  if (existingUser && !existingUser.active)
    throw new AppError('You already have an account that is not activated yet', 403);

  return existingUser.toJSON();
};
