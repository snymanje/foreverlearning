import { IProject } from './../../model/Projects';
import Project from '../../model/Projects';
import AddProjectDto from '../../dtos/AddProjectDto';

type userId = {
  userId: string;
};

export default async ({ title, techStack, features, userId }: AddProjectDto & userId): Promise<IProject> => {
  const project = new Project({
    user: userId,
    title,
    techStack,
    features
  });
  console.log(project);

  return await project.save();
};
