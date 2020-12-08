import AppError from '../../utils/appError';
import Project, { IProject } from '../../model/Projects';

export default async (id: string): Promise<IProject> => {
  const project = await Project.findByIdAndRemove(id);

  if (!project) throw new AppError('Project not found or maybe already deleted.', 400);

  return project;
};
