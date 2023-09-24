import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CidadesController } from './../controllers';

const routes = Router();

routes.get('/', (req, res) => {
  return res.send('Olá, DEV!');
});

routes.post('/cidades', CidadesController.create);

export { routes };
