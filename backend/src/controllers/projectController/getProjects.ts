import { Request, Response } from 'express';
import Project from '../../model/Projects';

export default async (req: Request, res: Response): Promise<void> => {
  const projects = await Project.find({});

  res.status(200).json(projects);
};
