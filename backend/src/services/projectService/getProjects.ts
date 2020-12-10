import Project, { IProject } from '../../model/Projects';

export default async (userId: string): Promise<IProject[]> => {
  let projects = await Project.find({ user: userId }).populate('user', 'name email');

  projects = projects.map((project) => project.toJSON());

  return projects;
};
