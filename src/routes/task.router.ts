import { Task } from "../types/task.type.js";
import express, { Router, type Request, type Response } from 'express';

const router = express.Router({ caseSensitive: true, strict: true });

router.get('/tasks', (req: Request, res: Response) => {
    const listaTarefas: Task [] = [
    { 
      id: 1, 
      title: 'Estudar TypeScript', 
      description: 'Aprender tipagem', 
      status: 'STUCK'
    },
    {
      id: 2,
      title: 'Fazer financeiro casamento',
      description: 'Planejar gastos',
      status: 'OPEN',
    }
  ];
  res.json(listaTarefas);
});

export default router;
