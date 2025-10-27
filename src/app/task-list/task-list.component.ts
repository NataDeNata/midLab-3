import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService, Task } from '../service/TaskService';

@Component({
  selector: 'app-task-list',
  standalone: true,              // ✅ if you’re using standalone components
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']   // ✅ fixed plural
})
export class TaskListComponent {
  tasks: Task[] = [];
  currentFilter: 'all' | 'active' | 'completed' = 'all';

  constructor(private taskService: TaskService) {
    this.loadTasks();
  }

  // ✅ centralize task loading with filter
  loadTasks(): void {
    this.tasks = this.taskService.getFilteredTasks(this.currentFilter);
  }

  setFilter(filter: 'all' | 'active' | 'completed'): void {
    this.currentFilter = filter;
    this.loadTasks();
  }

  toggleTaskCompletion(index: number): void {
    this.taskService.toggleTaskCompletion(index);
    this.loadTasks();   // ✅ refresh after toggle
  }

  deleteTask(index: number): void {
    this.taskService.deleteTasks(index);
    this.loadTasks();   // ✅ refresh after delete
  }

  getTotalTasks(): number {
    return this.taskService.getTotalTasks();
  }

  getTotalCompletedTasks(): number {
    return this.taskService.getTotalCompletedTasks();
  }
}