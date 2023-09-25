import { Router } from 'express';
import { CidadesController } from './../controllers';

const routes = Router();

routes.get('/', (req, res) => {
  return res.send('Olá, DEV!');
});

routes.post(
  '/cidades',
  CidadesController.createValidation,
  CidadesController.create,
);

export { routes };
