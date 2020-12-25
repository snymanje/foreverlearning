import { useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
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
      </Head>
      <div className="">
        <main className="container mx-auto">
          <div className="grid grid-cols-1 grid-rows-1 mt-8 lg:grid-cols-2">
            <div className="flex flex-col items-center text-gray-700">
              <h2 className="text-2xl font-bold">Add Projects</h2>
              <div className="flex flex-col flex-wrap mx-4 mt-6">
                <form onSubmit={(e) => addProjectHandler(e)} className="flex flex-col w-48 md:w-96">
                  <div className="flex flex-col mt-5">
                    <label htmlFor="title" className="text-lg text-gray-700">
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
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
                      className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
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
                      className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      onChange={(e) => setFeatures(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="submit"
                      name="Save"
                      className="w-full px-3 py-2 mt-1 leading-tight text-white bg-yellow-800 border rounded shadow appearance-none cursor-pointer hover:bg-yellow-700 focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <button onClick={(e) => addProjectHandler(e)}></button>
                </form>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start text-gray-700">
              <h2 className="mt-6 text-2xl font-bold lg:mt-0">Projects</h2>
              <div className="flex flex-col flex-wrap mx-4 mt-6">
                {error && (
                  <p className="p-3 mb-4 text-center text-red-500 border border-red-500 border-solid">{error}</p>
                )}
                {projects.map((project) => {
                  return (
                    <div key={project._id} className="max-w-2xl mb-3 border border-gray-200 border-solid shadow-md">
                      <div className="flex flex-col justify-between p-4 transition ease-linear hover:shadow-lg">
                        <div>
                          <h3 className="text-lg font-bold">{project.title}</h3>
                          <p className="font-medium text-yellow-700 text-md">{project.techStack}</p>
                          <p className="mt-3 font-medium text-yellow-700 text-md">{project.features}</p>
                        </div>
                        <div className="self-end mt-5 min-w-max">
                          <i className="text-xl cursor-pointer fas fa-edit" style={{ color: 'green' }}></i>
                          <i
                            className="ml-6 text-xl cursor-pointer fas fa-trash"
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
