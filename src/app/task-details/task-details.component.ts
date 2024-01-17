import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../services/task.model';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.scss',
})
export class TaskDetailsComponent implements OnInit {
  @Input() _taskId: number | undefined;
  task: any;

  constructor(private service: TaskService) {}

  ngOnInit() {
    this.getTsk();
  }

  getTsk() {
    this.task = this.service.getTaskById(this._taskId);
  }
}
