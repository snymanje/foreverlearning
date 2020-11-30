import '../styles/globals.css';
import { AppProps } from 'next/app';
import ProjectContextProvider from '../context/projects/ProjectContext';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ProjectContextProvider>
      <Component {...pageProps} />
    </ProjectContextProvider>
  );
};

export default App;
