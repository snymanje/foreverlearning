import '../styles/globals.css';
import { AppProps } from 'next/app';
import ProjectContextProvider from '../context/projects/ProjectContext';
import AuthContextProvider from '../context/auth/AuthContext';
import Header from '../components/Header';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthContextProvider>
      <ProjectContextProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <Component {...pageProps} />
        </div>
      </ProjectContextProvider>
    </AuthContextProvider>
  );
};

export default App;
