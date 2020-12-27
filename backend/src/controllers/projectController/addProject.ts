import { Request, Response } from 'express';
import projectService from '../../services/projectService';

export default async (req: Request, res: Response): Promise<void> => {
  const userId = res.locals.user._id;
  const project = await projectService.addProject({ ...req.body, userId });

  res.status(201).json(project.toJSON());
};
