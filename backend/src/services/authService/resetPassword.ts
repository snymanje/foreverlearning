import User from '../../model/User';
import crypto from 'crypto';
import AppError from '../../utils/appError';
import { IUser } from '../../interfaces/user.interfaces';
import ResetPasswordDto from '../../dtos/ResetPasswordDto';

export default async (requestBody: ResetPasswordDto, resetToken: string): Promise<IUser> => {
  const { password, passwordConfirm } = requestBody;

  if (password != passwordConfirm) throw new AppError('Password and Confirm Password do not match.', 400);

  const hashedToken = await crypto.createHash('sha256').update(resetToken).digest('hex');

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: new Date(Date.now()) }
  });

  if (!user) {
    throw new AppError('The user for this token does not exist or this token has expired', 400);
  }

  user.updatePassword(password);
  await user.save();

  return user.toJSON();
};
