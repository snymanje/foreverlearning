import { IProject } from './../../model/Projects';
import Project from '../../model/Projects';

export default async ({ title, techStack, features, user }: IProject): Promise<IProject> => {
  const project = new Project({
    user,
    title,
    techStack,
    features
  });
  console.log(project);

  return await project.save();
};
