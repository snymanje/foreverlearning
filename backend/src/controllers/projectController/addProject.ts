import { Request, Response } from 'express';
import projectService from '../../services/projectService';

export default async (req: Request, res: Response): Promise<void> => {
  const user = res.locals.jwtPayload.id;
  const project = await projectService.addProject({ ...req.body, user });

  res.status(201).json(project.toJSON());
};
