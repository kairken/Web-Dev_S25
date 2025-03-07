import { Component, Output, EventEmitter } from '@angular/core';
import { BaseTaskComponent } from '../base-task.component';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
  standalone: false 
})
export class TaskItemComponent extends BaseTaskComponent {
  @Output() taskStatusChanged = new EventEmitter<number>();

  markAsCompleted(): void {
    this.taskStatusChanged.emit(this.task.id);
  }
}
