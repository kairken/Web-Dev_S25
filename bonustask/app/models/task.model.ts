export interface Task {
  id: number;
  title: string;
  description: string;
  category: string;
  status: 'pending' | 'completed';
  deadline: Date;
}
