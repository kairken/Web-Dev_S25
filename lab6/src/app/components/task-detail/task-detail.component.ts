import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { BaseTaskComponent } from '../base-task.component';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
  standalone: false
})
export class TaskDetailComponent extends BaseTaskComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {
    super();
  }

  ngOnInit(): void {
    const taskId = this.route.snapshot.paramMap.get('id');
    if (taskId) {
      const id = +taskId;
      const task = this.taskService.getTaskById(id);
      if (task) {
        this.task = task;
      }
    }
  }
}
