import { Request, Response } from 'express';
import projectService from '../../services/projectService';

export default async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const project = await projectService.deleteProject(id);
  res.status(203).json({
    message: 'Project removed successfully',
    project
  });
};
