import { Request, Response } from 'express';
import Project from '../../model/Projects';
//import userService from '../../services/userService';

export default async (req: Request, res: Response): Promise<void> => {
  //const user = await userService.deleteUser(Number(req.params.id));
  const projects = await Project.find({});

  res.status(200).json(projects);
};
