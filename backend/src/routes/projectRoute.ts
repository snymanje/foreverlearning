import { Router } from 'express';
import Project from '../model/Projects';

const router = Router();

router.get('/', async (req, res) => {
  const projects = await Project.find({});

  res.json(projects);
});

router.post('/', async (req, res) => {
  const { title } = req.body;

  const project = new Project();
  project.title = title;

  const newProject = await project.save();

  res.json(newProject.toJSON());
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  await Project.findByIdAndRemove(id);

  res.send('Project removed successfully');
});

export default router;
