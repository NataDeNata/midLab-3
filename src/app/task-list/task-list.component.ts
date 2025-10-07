import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService, Task } from '../service/TaskService';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
    this.taskService.getTotalTasks();
  }

  toggleTaskCompletion(index: number){
    this.taskService.toggleTaskCompletion(index);
   this.taskService.getTasks();
  }
  getTotalTasks(): number {
    return this.taskService.getTotalTasks();
  }
  deleteTask(index: number){
    this.taskService.deleteTasks(index);
    this.tasks = this.taskService.getTasks();
  }
  getTotalCompletedTasks(index: number){
   return this.taskService.getTotalCompletedTasks(index);
  }
}
