import User from '../../model/User';
import AppError from '../../utils/appError';
import { IUserWithActivationToken } from '../../interfaces/user.interfaces';
import CreateUser from '../../dtos/CreateLocalUserDto';

export default async (requestBody: CreateUser): Promise<IUserWithActivationToken> => {
  if (requestBody.password != requestBody.passwordConfirm)
    throw new AppError('Password and Confirm Password do not match.', 400);
  const newUser = new User();
  newUser.method = 'local';
  newUser.name = requestBody.name;
  newUser.password = requestBody.password;
  newUser.email = requestBody.email;

  const activationToken = await newUser.createAccountActivationToken();
  await newUser.save();

  return { ...newUser.toJSON(), activationToken };
};
