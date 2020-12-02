import { Request, Response } from 'express';
import Project from '../../model/Projects';
//import userService from '../../services/userService';

export default async (req: Request, res: Response): Promise<void> => {
  //const user = await userService.deleteUser(Number(req.params.id));
  const { title } = req.body;

  const project = new Project();
  project.title = title;

  const newProject = await project.save();

  res.status(201).json(newProject.toJSON());
};
