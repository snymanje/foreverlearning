import User from '../../model/User';
import AppError from '../../utils/appError';
import { IUserWithActivationToken } from '../../interfaces/user.interfaces';
import GoogleUserDto from '../../dtos/GoogleUserDto';
import authService from '../authService';

export default async (requestBody: GoogleUserDto): Promise<IUserWithActivationToken> => {
  const { access_token } = requestBody;

  if (!access_token) throw new AppError('The google access token was not provided.', 400);

  const { sub, name, email } = await authService.getGoogleUser(access_token);

  // check if the current user exists in the DB
  const existingUser = await User.findOne({ googleId: sub });

  if (existingUser && !existingUser.active)
    throw new AppError('You already have an account that is not activated yet', 403);

  if (existingUser && existingUser.active) {
    throw new AppError('You already signed up, go to login', 403);
  }

  // Id user does not exist create a new one`);
  const newUser = new User();
  newUser.method = 'google';
  newUser.googleId = sub;
  newUser.name = name;
  newUser.email = email;

  const activationToken = await newUser.createAccountActivationToken();
  await newUser.save();

  return { ...newUser.toJSON(), activationToken };
};
