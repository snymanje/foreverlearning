import { Request, Response } from 'express';
import projectService from '../../services/projectService';

export default async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  await projectService.deleteProject(id);
  res.send('Project removed successfully');
};
