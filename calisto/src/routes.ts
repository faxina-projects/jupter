import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.status(200).send({ message: 'Response from Calisto!' });
});

router.get('/app', (req, res) => {
  return res.status(200).send({ message: 'App Response from Calisto!' });
});

router.get('/app/v1', (req, res) => {
  return res.status(200).send({ message: 'App v1 Response from Calisto!' });
});
export default router;
