import { Request, Response } from 'express';
import Project from '../../model/Projects';

export default async (req: Request, res: Response): Promise<void> => {
  const userId = res.locals.jwtPayload._id;
  let projects = await Project.find({ user: userId }).populate('user', 'name email');

  projects = projects.map((project) => project.toJSON());

  res.status(200).json(projects);
};
