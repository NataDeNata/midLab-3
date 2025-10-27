import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../service/TaskService';
import { Task } from '../service/TaskModel';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: Task[] = [];
  currentFilter: 'all' | 'active' | 'completed' = 'all';
  newTask: string = '';

  constructor(private taskService: TaskService) {
    this.loadTasks();
  }

  loadTasks(): void {
    this.tasks = this.taskService.getFilteredTasks(this.currentFilter);
  }

  setFilter(filter: 'all' | 'active' | 'completed'): void {
    this.currentFilter = filter;
    this.loadTasks();
  }

  addTask(): void {
    this.taskService.addTask(this.newTask);
    this.newTask = '';
    this.loadTasks();
  }

  toggleTaskCompletion(index: number): void {
    this.taskService.toggleTaskCompletion(index);
    this.loadTasks();
  }

  deleteTask(index: number): void {
    this.taskService.deleteTask(index);
    this.loadTasks();
  }

  getTotalTasks(): number {
    return this.taskService.getTotalTasks();
  }

  getTotalCompletedTasks(): number {
    return this.taskService.getTotalCompletedTasks();
  }
}
