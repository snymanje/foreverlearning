import { IProject } from './../../model/Projects';
import Project from '../../model/Projects';

export default async (title: string): Promise<IProject> => {
  const project = new Project();
  project.title = title;

  return await project.save();
};
