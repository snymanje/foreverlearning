import User from '../../model/User';
import AppError from '../../utils/appError';
import { IUserWithPwdResetToken, IUserEmail } from '../../interfaces/user.interfaces';

export default async (requestBody: IUserEmail): Promise<IUserWithPwdResetToken> => {
  const { email } = requestBody;
  // check if the current user exists in the DB
  const user = await User.findOne({ email });

  if (!user) {
    throw new AppError('A user with this email address does not exist', 401);
  }

  const resetToken = await user.createPasswordResettoken();
  await user.save();

  const clientData = await user.toJSON();
  return { ...clientData, resetToken };
};
