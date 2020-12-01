import { Router } from 'express';
import Tutorial from '../model/Tutorial';

const router = Router();

router.get('/', async (req, res) => {
  const tutorials = await Tutorial.find({});

  res.json(tutorials);
});

router.post('/', async (req, res) => {
  const { title } = req.body;

  const tutorial = new Tutorial();
  tutorial.title = title;

  const newTutorial = await tutorial.save();

  res.json(newTutorial.toJSON());
});

export default router;
