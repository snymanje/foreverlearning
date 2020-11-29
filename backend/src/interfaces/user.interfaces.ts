import { Request } from 'express';
import { Document } from 'mongoose';

export interface IUser extends Document {
  method: string;
  role: string;
  active: boolean;
  accountActivationToken: string;
  accountActivationExpires: Date;
  name: string;
  email: string;
  password: string;
  passwordChangedAt: Date;
  passwordResetToken: string;
  passwordResetExpires: Date;
  googleId: string;
  isVerified: boolean;
  changedPasswordAfter(decode: number): string;
  createAccountActivationToken(): string;
  checkIfUnencryptedPasswordIsValid(password: string): boolean;
  createPasswordResettoken(): string;
  updatePassword(password: string): void;
}

export interface IUserEmail {
  email: string;
}

export interface IUserWithActivationToken extends IUser {
  activationToken: string;
}

export interface IUserWithPwdResetToken extends IUser {
  resetToken: string;
}

export interface RequestWithUser extends Request {
  user: IUser;
}

export interface ITokens {
  access_token: string;
  refresh_token: string;
}
