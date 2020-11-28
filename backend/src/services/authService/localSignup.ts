import User from '../../model/User';
import AppError from '../../utils/appError';
import { IUserWithActivationToken } from '../../interfaces/user.interfaces';
import CreateUser from '../../dtos/CreateLocalUserDto';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async (requestBody: CreateUser): Promise<IUserWithActivationToken> => {
  if (requestBody.password != requestBody.passwordConfirm)
    throw new AppError('Password and Confirm Password do not match.', 400);
  const user = new User();
  user.method = 'local';
  user.name = requestBody.name;
  user.password = requestBody.password;
  user.email = requestBody.email;

  const newUser = await user.save();

  return newUser.toJSON();
};
