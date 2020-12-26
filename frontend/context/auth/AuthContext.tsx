import { createContext, useEffect, useReducer } from 'react';
import axiosConfig from '../../helpers/axiosInterceptor';
import { authReducer, IUser, IUserState } from './authReducer';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { Props } from '../projects/ProjectContext';

interface IAuthContext {
  user: IUser;
  loading: boolean;
  error: string;
  localLogin: (formData: { email: string; password: string }) => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

const AuthContextProvider = (props: Props): JSX.Element => {
  const initialState: IUserState = {
    user: null,
    loading: true,
    error: null
  };

  const router = useRouter();
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load user from local storage
  useEffect(() => {
    const userForLocalStorage = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user') as string)
      : null;

    dispatch({ type: 'LOAD_USER_LOCALSTORAGE', payload: userForLocalStorage });

    if (!userForLocalStorage) router.push('/login');
  }, []);

  // LOGIN
  const localLogin = async (formData: { email: string; password: string }) => {
    dispatch({ type: 'LOAD_USER' });
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const { data } = await axiosConfig.post('/api/v1/auth/locallogin', formData, config);
      localStorage.setItem('user', JSON.stringify(data.user));
      dispatch({ type: 'LOGIN_SUCCESS', payload: data.user });
    } catch (err) {
      dispatch({ type: 'LOGIN_FAIL', payload: err.response.data.message });
    }
  };

  // LOGOUT
  const logout = async () => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('user');
    Cookies.remove('refreshTokenPayload');
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        error: state.error,
        loading: state.loading,
        localLogin,
        logout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
