import { Component, Input } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  template: ''
})
export class BaseTaskComponent {
  @Input() task!: Task;
}
