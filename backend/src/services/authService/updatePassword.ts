import User from '../../model/User';
import AppError from '../../utils/appError';
import { IUser } from '../../interfaces/user.interfaces';
import UpdatePasswordDto from '../../dtos/updatePasswordDto';

export default async (requestBody: UpdatePasswordDto, id: number): Promise<IUser> => {
  const { password, passwordCurrent, passwordConfirm } = requestBody;

  if (password != passwordConfirm) throw new AppError('Password and Confirm Password do not match.', 400);

  const user = await User.findById(id);

  if (!user || !(await user.checkIfUnencryptedPasswordIsValid(passwordCurrent))) {
    throw new AppError('Passwords are not correct', 403);
  }

  const check = await user.checkIfUnencryptedPasswordIsValid(passwordCurrent);
  console.log(check);

  await user.updatePassword(password);
  await user.save();

  return user.toJSON();
};
