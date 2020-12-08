import { IProject } from './../model/Projects';
import { Router } from 'express';
import projectController from '../controllers/projectController/';
import EmptyDto from '../dtos/EmptyDto';
import { checkJwt } from '../middlewares/checkJwt';
// import { checkRole } from '../middlewares/checkRoles';
import validateRequest from '../middlewares/validate';
import validateReqParams from '../middlewares/validateReqParams';
import AddProjectDto from '../dtos/AddProjectDto';
import DeleteProjectDto from '../dtos/DeleteProjectDto';

const router = Router();

router
  .route('/')
  .get(validateRequest(EmptyDto), checkJwt, projectController.getProjects)
  .post(validateRequest(AddProjectDto), checkJwt, projectController.addProject);

router
  .route('/:id')
  .delete(validateRequest(EmptyDto), validateReqParams(DeleteProjectDto), checkJwt, projectController.deleteProject);

export default router;
