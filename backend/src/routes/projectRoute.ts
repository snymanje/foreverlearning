import { Router } from 'express';
import projectController from '../controllers/projectController/';
import { checkJwt } from '../middlewares/checkJwt';
import { checkRole } from '../middlewares/checkRoles';

const router = Router();

router.get('/', [checkJwt, checkRole(['admin'])], projectController.getProjects);

router.post('/', projectController.addProject);

router.delete('/:id', projectController.deleteProject);

export default router;
