import { Request, Response } from 'express';
import Project from '../../model/Projects';

export default async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  await Project.findByIdAndRemove(id);

  res.send('Project removed successfully');
};
