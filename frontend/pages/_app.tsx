import '../styles/globals.css';
import { AppProps } from 'next/app';
import ProjectContextProvider from '../context/projects/ProjectContext';
import AuthContextProvider from '../context/auth/AuthContext';
import '../helpers/axiosInterceptor';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthContextProvider>
      <ProjectContextProvider>
        <Component {...pageProps} />
      </ProjectContextProvider>
    </AuthContextProvider>
  );
};

export default App;
