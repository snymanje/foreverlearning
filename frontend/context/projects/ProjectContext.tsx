import React, { createContext, ReactNode, useContext, useReducer } from 'react';
import axiosConfig from '../../helpers/axiosInterceptor';
import { projectReducer, IProject, IProjectState } from './projectReducer';
import { AuthContext } from '../../context/auth/AuthContext';

interface IProjectContext {
  projects: IProject[];
  loading: boolean;
  error: string;
  /*   dispatch: React.Dispatch<Actions>; */
  getProjects: () => void;
  addProject: (project: IProject) => void;
  deleteProject: (id: string) => void;
}

export const ProjectContext = createContext<IProjectContext | undefined>(undefined);

export type Props = {
  children: ReactNode;
};

const ProjectContextProvider = (props: Props): JSX.Element => {
  const initialState: IProjectState = {
    projects: [],
    loading: false,
    error: null
  };

  const context = useContext(AuthContext);
  const { logout } = context;

  const [state, dispatch] = useReducer(projectReducer, initialState);

  // GET Projects
  const getProjects = async () => {
    try {
      const res = await axiosConfig.get('/api/v1/project');
      dispatch({ type: 'GET_PROJECTS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'PROJECT_ERROR', payload: err.response.data.message });
      err.response && err.response.status === 401 ? logout() : null;
    }
  };

  // Add Project
  const addProject = async (project: IProject) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const res = await axiosConfig.post('/api/v1/project', project, config);
      dispatch({ type: 'ADD_PROJECT', payload: res.data });
    } catch (err) {
      dispatch({ type: 'PROJECT_ERROR', payload: err.response.data.message });
      err.response && err.response.status === 401 ? logout() : null;
    }
  };

  // Delete Project
  const deleteProject = async (project) => {
    try {
      await axiosConfig.delete(`/api/v1/project/${project._id}`);
      dispatch({ type: 'DELETE_PROJECT', payload: project });
    } catch (err) {
      dispatch({ type: 'PROJECT_ERROR', payload: err.response.data.message });
      err.response && err.response.status === 401 ? logout() : null;
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        projects: state.projects,
        error: state.error,
        loading: state.loading,
        getProjects,
        addProject,
        deleteProject
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
