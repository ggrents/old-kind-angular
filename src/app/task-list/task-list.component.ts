import { Component } from '@angular/core';
import { Task } from '../services/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  tasks: Task[];
  constructor(private service: TaskService) {
    this.tasks = service.getTasks();
  }

  deleteTask(id: number): void {
    this.service.deleteTask(id);
    this.tasks = this.service.getTasks();
  }

  toogleTask(id: number): void {
    this.service.toggleTask(id);
  }
}
