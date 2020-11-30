import React, { createContext, ReactNode, useReducer } from 'react';
import { projectReducer } from '../../reducers/projectReducer';

interface IProject {
  title: string;
}

interface IDispatch {
  type: string;
  project: IProject;
}

interface IProjectContext {
  projects: IProject[];
  dispatch: React.Dispatch<IDispatch>;
}

export const ProjectContext = createContext<IProjectContext | undefined>(undefined);

export type Props = {
  children: ReactNode;
};

const ProjectContextProvider = (props: Props): JSX.Element => {
  const [projects, dispatch] = useReducer(projectReducer, []);

  return <ProjectContext.Provider value={{ projects, dispatch }}>{props.children}</ProjectContext.Provider>;
};

export default ProjectContextProvider;
