import AppError from '../../utils/appError';
import crypto from 'crypto';
import User from '../../model/User';
import { IUser } from '../../interfaces/user.interfaces';

export default async (activationToken: string): Promise<IUser> => {
  if (!activationToken) throw new AppError('No Activation token found', 400);

  const hashedToken = crypto.createHash('sha256').update(activationToken).digest('hex');
  console.log(activationToken);
  console.log(new Date(Date.now()));
  console.log(hashedToken);

  const user = await User.findOne({
    accountActivationToken: hashedToken,
    accountActivationExpires: { $gt: new Date(Date.now()) }
  });

  //console.log(user.accountActivationExpires);

  if (!user) {
    throw new AppError('The user for this token does not exist or this token has expired', 400);
  }

  if (user.active) {
    throw new AppError('This account is already active', 400);
  }

  user.active = true;
  await user.save();

  return user.toJSON();
};
