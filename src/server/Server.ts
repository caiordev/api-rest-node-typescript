import express from 'express';
import 'dotenv/config';
import './shared/services/TranslationsYup';

import { routes } from './routes';

const App = express();
App.use(express.json());

App.use(routes);

export { App };
