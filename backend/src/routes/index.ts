import { Router } from 'express';
import auth from './authRoute';
import user from './userRoute';
import tutorial from './tutorialRoute';
import project from './projectRoute';

const routes = Router();

routes.use('/auth', auth);
routes.use('/user', user);
routes.use('/tutorial', tutorial);
routes.use('/project', project);
export default routes;
