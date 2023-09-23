import { App } from './server/Server';

App.listen(process.env.PORT || 3333, () => {
  console.log(`Server is running is port ${process.env.PORT || 3333}!`);
});
