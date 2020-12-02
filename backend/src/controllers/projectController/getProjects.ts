import { Request, Response } from 'express';
import Project from '../../model/Projects';

export default async (req: Request, res: Response): Promise<void> => {
  let projects = await Project.find({});

  projects = projects.map((project) => project.toJSON());

  res.status(200).json(projects);
};
