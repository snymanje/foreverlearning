import { createContext } from 'react';
import { IUser } from './authReducer';

interface IAuthContext {
  user: IUser;
  loading: boolean;
  error: string;
  localLogin: (formData: { email: string; password: string }) => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);
