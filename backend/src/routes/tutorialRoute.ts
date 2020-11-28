import { Router } from 'express';
import { getRepository } from 'typeorm';
import { Tutorial } from '../model/Tutorial';

const router = Router();

router.post('/', async (req, res) => {
  const userRepository = getRepository(Tutorial);

  const tutorial = new Tutorial();
  tutorial.text = 'sdfsfsf';
  tutorial.title = 'local';
  tutorial.description = 'werwerr';
  tutorial.channel = 'sdfsdfsdf';
  tutorial.instructor = 'sdfsdfsd';
  tutorial.duration = 30;

  const newTutorial = await userRepository.save(tutorial);

  res.json(newTutorial.toJSON());
});

export default router;
