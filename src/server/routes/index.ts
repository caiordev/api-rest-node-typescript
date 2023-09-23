import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const routes = Router();

routes.get('/', (req, res) => {
  return res.send('Olá, DEV!');
});

routes.post('/test', (req, res) => {
  console.log(req.body);
  return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
});

export { routes };
