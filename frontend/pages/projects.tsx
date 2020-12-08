import { useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../components/Header';
import { ProjectContext } from '../context/projects/ProjectContext';
import { AuthContext } from '../context/auth/AuthContext';

interface Props {
  children: ReactNode;
  isAuthenticated: boolean;
}

const projects: React.FC<Props> = () => {
  const router = useRouter();

  const projectContext = useContext(ProjectContext);
  const { projects, error, getProjects, addProject, deleteProject } = projectContext;

  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const [title, setTitle] = useState<string>('');
  const [techStack, setTechStack] = useState<string>('');
  const [features, setFeatures] = useState<string>('');

  useEffect(() => {
    if (user) {
      getProjects();
    } else {
      router.push('/login');
    }
  }, [user]);

  const addProjectHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    addProject({
      title,
      techStack,
      features
    });
  };

  const deleteProjectHandler = async (project) => {
    deleteProject(project);
  };

  return (
    <div>
      <Head>
        <title>Forever Learning - Projects</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="">
        <Header />
        <main className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 mt-8">
            <div className="flex flex-col items-center text-gray-700">
              <h2 className="font-bold text-2xl">Add Projects</h2>
              <div className="flex flex-col flex-wrap mt-6 mx-4">
                <form onSubmit={(e) => addProjectHandler(e)} className="flex flex-col w-48 md:w-96">
                  <div className="flex flex-col mt-5">
                    <label htmlFor="title" className="text-lg text-gray-700">
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mt-5">
                    <label htmlFor="title" className="text-lg text-gray-700">
                      Technology Stack
                    </label>
                    <input
                      type="text"
                      name="techStack"
                      className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                      onChange={(e) => setTechStack(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col my-3">
                    <label htmlFor="description" className="text-lg text-gray-700">
                      Features
                    </label>
                    <textarea
                      cols={10}
                      rows={5}
                      name="features"
                      className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                      onChange={(e) => setFeatures(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="submit"
                      name="Save"
                      className="w-full shadow appearance-none border rounded py-2 px-3 bg-yellow-800 hover:bg-yellow-700 text-white mt-1 leading-tight focus:outline-none focus:shadow-outline cursor-pointer"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start text-gray-700">
              <h2 className="font-bold text-2xl mt-6 lg:mt-0">Projects</h2>
              <div className="flex flex-col flex-wrap mt-6 mx-4">
                {error && (
                  <p className="border border-solid border-red-500 p-3 text-red-500 text-center mb-4">{error}</p>
                )}
                {projects.map((project) => {
                  return (
                    <div key={project._id} className="max-w-2xl border border-solid border-gray-200 shadow-md mb-3">
                      <div className="flex flex-col justify-between p-4 hover:shadow-lg transition ease-linear">
                        <div>
                          <h3 className="font-bold text-lg">{project.title}</h3>
                          <p className="text-md text-yellow-700 font-medium">{project.techStack}</p>
                          <p className="text-md text-yellow-700 font-medium mt-3">{project.features}</p>
                        </div>
                        <div className="self-end min-w-max mt-5">
                          <i className="fas fa-edit text-xl cursor-pointer" style={{ color: 'green' }}></i>
                          <i
                            className="fas fa-trash text-xl ml-6 cursor-pointer"
                            style={{ color: 'red' }}
                            onClick={() => deleteProjectHandler(project)}
                          ></i>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

/* export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const isAuthenticated = req?.headers?.cookie?.split(';')[2]?.trim()?.includes('token');
  if (isAuthenticated) {
    return {
      props: { isAuthenticated: true } // will be passed to the page component as props
    };
  } else {
    return {
      props: { isAuthenticated: false } // will be passed to the page component as props
    };
  }
}; */

export default projects;
