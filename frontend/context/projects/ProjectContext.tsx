import React, { createContext, ReactNode, useReducer } from 'react';
import { projectReducer, IProject, IDispatch, IProjectState } from '../../reducers/projectReducer';

interface IProjectContext {
  projects: IProject[];
  dispatch: React.Dispatch<IDispatch>;
}

export const ProjectContext = createContext<IProjectContext | undefined>(undefined);

export type Props = {
  children: ReactNode;
};

const ProjectContextProvider = (props: Props): JSX.Element => {
  const initialState = {
    projects: []
  };
  const [state, dispatch] = useReducer(projectReducer, initialState);

  return (
    <ProjectContext.Provider value={{ projects: state.projects, dispatch }}>{props.children}</ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
