import { IProject } from '../../model/Projects';
import { Request, Response } from 'express';
import projectService from '../../services/projectService';

export default async (req: Request, res: Response): Promise<void> => {
  const project = await projectService.addProject(req.body as IProject);

  res.status(201).json(project.toJSON());
};
