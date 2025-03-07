import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    {
      id: 1,
      title: 'Изучить Angular',
      description: 'Изучить основы Angular версии 19',
      category: 'Обучение',
      status: 'pending',
      deadline: new Date('2024-03-01')
    },
    {
      id: 2,
      title: 'Написать проект',
      description: 'Разработать систему управления задачами',
      category: 'Работа',
      status: 'pending',
      deadline: new Date('2024-03-15')
    }
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: number): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }

  updateTaskStatus(id: number, newStatus: 'pending' | 'completed'): void {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.status = newStatus;
    }
  }
}
