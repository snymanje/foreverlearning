import React, { createContext, ReactNode, useState } from 'react';

interface IProject {
  title: string;
}

interface IProjectContext {
  addProject(title: string): void;
  projects: IProject[];
}

export const ProjectContext = createContext<IProjectContext | undefined>(undefined);

export type Props = {
  children: ReactNode;
};

const ProjectContextProvider = (props: Props): JSX.Element => {
  const [projects, setProjects] = useState<IProject[]>([
    {
      title: 'Build my first react project with Context and Hooks'
    },
    {
      title: 'Portfolio site'
    }
  ]);

  const addProject = async (title: string) => {
    setProjects([...projects, { title: title }]);
  };

  return <ProjectContext.Provider value={{ projects, addProject }}>{props.children}</ProjectContext.Provider>;
};

export default ProjectContextProvider;
