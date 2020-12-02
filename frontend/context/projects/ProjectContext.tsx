import React, { createContext, ReactNode, useReducer } from 'react';
import axios from 'axios';
import { projectReducer, IProject, Actions, IProjectState } from '../../reducers/projectReducer';

interface IProjectContext {
  projects: IProject[];
  loading: boolean;
  error: string;
  dispatch: React.Dispatch<Actions>;
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
  const [state, dispatch] = useReducer(projectReducer, initialState);

  // GET Projects
  const getProjects = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/v1/project');
      dispatch({ type: 'GET_PROJECTS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'PROJECT_ERROR', payload: err.response.msg });
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
      const res = await axios.post('http://localhost:5000/api/v1/project', project, config);
      dispatch({ type: 'ADD_PROJECT', payload: res.data });
    } catch (err) {
      dispatch({ type: 'PROJECT_ERROR', payload: err.response.data.message });
    }
  };

  // Delete Project
  const deleteProject = async (project) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/project/${project._id}`);
      dispatch({ type: 'DELETE_PROJECT', payload: project });
    } catch (err) {
      dispatch({ type: 'PROJECT_ERROR', payload: err.response.msg });
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        projects: state.projects,
        error: state.error,
        loading: state.loading,
        dispatch,
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
