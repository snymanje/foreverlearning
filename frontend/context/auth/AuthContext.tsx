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

/* const AuthContextProvider: React.FC = ({ children }) => {
  const initialState: IUserState = {
    user: null,
    loading: false,
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load user from local storage
  useEffect(() => {
    const userForLocalStorage = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user') as string)
      : null;

    dispatch({ type: 'LOAD_USER_LOCALSTORAGE', payload: userForLocalStorage });
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
      const { data } = await axiosConfig.post('http://localhost:5000/api/v1/auth/locallogin', formData, config);
      localStorage.setItem('user', JSON.stringify(data.user));
      dispatch({ type: 'LOGIN_SUCCESS', payload: data.user });
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
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider; */
