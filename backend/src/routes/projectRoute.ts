import { Router } from 'express';
import projectController from '../controllers/projectController/';

const router = Router();

router.get('/', projectController.getProjects);

router.post('/', projectController.addProject);

router.delete('/:id', projectController.deleteProject);

export default router;
