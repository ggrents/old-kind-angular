import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../services/task.model';
import { SrvRecord } from 'dns';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
})
export class TaskFormComponent {
  constructor(private service: TaskService, private router: Router) {}
  taskTitle: string = '';

  addTask(): void {
    if (this.taskTitle.trim() !== '') {
      this.service.addTask({
        id: Date.now(),
        title: this.taskTitle.trim(),
        completed: false,
      });
      this.router.navigate(['/']);
    }
  }
}
