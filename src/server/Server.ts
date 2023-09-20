import express from 'express';

const App = express();

App.use(express.json());

App.get('/', (req, res) => {
  return res.send('Olá, DEV!');
});

export { App };
