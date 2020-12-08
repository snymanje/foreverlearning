import { IProject } from './../../model/Projects';
import Project from '../../model/Projects';

export default async ({ title, techStack, features }: IProject): Promise<IProject> => {
  const project = new Project();
  project.title = title;
  project.techStack = techStack;
  project.features = features;

  return await project.save();
};
