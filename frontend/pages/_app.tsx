import '../styles/globals.css';
import { AppProps } from 'next/app';
import ProjectContextProvider from '../context/projects/ProjectContext';
import AuthContextProvider from '../context/auth/authContext';

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
