export type TaskStatus = | 'OPEN' | 'STUCK' | 'ON_GOING' | 'CLOSED';

export interface Task {
  id: number;
  title: string;
  description?: string;
  status: TaskStatus;
}

