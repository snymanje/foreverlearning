import '../styles/globals.css';
import { useEffect, useReducer } from 'react';
import { AppProps } from 'next/app';
import ProjectContextProvider from '../context/projects/ProjectContext';
import axiosConfig from '../helpers/axiosInterceptor';
import { AuthContext } from '../context/auth/AuthContext';
import { authReducer, IUserState } from '../context/auth/authReducer';
import '../helpers/axiosInterceptor';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
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

  // LOGOUT
  const logout = async () => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('user');
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
      <ProjectContextProvider>
        <Component {...pageProps} />
      </ProjectContextProvider>
    </AuthContext.Provider>
  );
};

export default App;
