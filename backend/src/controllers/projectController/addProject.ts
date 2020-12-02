import { Request, Response } from 'express';
import projectService from '../../services/projectService';

export default async (req: Request, res: Response): Promise<void> => {
  const { title } = req.body;
  const project = await projectService.addProject(title);

  res.status(201).json(project.toJSON());
};
