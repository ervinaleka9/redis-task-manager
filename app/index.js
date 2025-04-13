import express from 'express';
import routes from './routes.js';

const app = express();
app.use(express.json());
app.use('/tasks', routes);

if (process.env.NODE_ENV !== 'test') {
  const PORT = 3000;
  app.listen(PORT, () => console.log('Server running on port', PORT));
}

export default app;
