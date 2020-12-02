import React, { createContext, ReactNode, useReducer } from 'react';
import axios from 'axios';
import { authReducer, IUser, IUserState } from './authReducer';

interface IAuthContext {
  user: IUser;
  loading: boolean;
  error: string;
  localLogin: (formData: { email: string; password: string }) => void;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export type Props = {
  children: ReactNode;
};

const AuthContextProvider = (props: Props): JSX.Element => {
  const initialState: IUserState = {
    user: null,
    loading: false,
    error: null
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  // LOGIN
  const localLogin = async (formData: { email: string; password: string }) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post('http://localhost:5000/api/v1/auth/locallogin', formData, config);
      console.log(res);
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.user });
    } catch (err) {
      dispatch({ type: 'LOGIN_FAIL', payload: err.response.data.message });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        error: state.error,
        loading: state.loading,
        localLogin
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
