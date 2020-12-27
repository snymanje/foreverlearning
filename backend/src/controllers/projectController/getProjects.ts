import { Request, Response } from 'express';
import projectService from '../../services/projectService';

export default async (_req: Request, res: Response): Promise<void> => {
  const userId = res.locals.user._id;
  const projects = await projectService.getProjects(userId);

  res.status(200).json(projects);
};
