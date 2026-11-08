import express, { type Express, type Request, type Response } from 'express';
import taskRouter from './routes/task.router.js'
// import { describe } from 'node:test';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Conexao com Express realizada com sucesso');
});

app.use('/tasks', taskRouter);

app.listen(3000);
