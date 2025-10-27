import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService, Task, TaskFilter } from '../service/TaskService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: Task[] = [];
  editingIndex: number | null = null;
  editedText: string = '';
   filter: TaskFilter = 'all';

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
    this.taskService.getTotalTasks();
    this.taskService.filteredTasks$.subscribe(tasks => {
      this.tasks = tasks;
    });
  }


  setFilter(filter: TaskFilter) {
    this.filter = filter;
    this.taskService.setFilter(filter);
  }

 startEdit(id: number) {
  this.editingIndex = id;
  const task = this.tasks.find(t => t.id === id);
  this.editedText = task ? task.text : '';
}

saveEdit(id: number) {
  if (this.editedText.trim()) {
    this.taskService.updateTask(id, this.editedText);
  }
  this.editingIndex = null;
  this.editedText = '';
}

cancelEdit() {
  this.editingIndex = null;
  this.editedText = '';
}

toggleTaskCompletion(id: number) {
  this.taskService.toggleTaskCompletion(id);
}
  getTotalTasks(): number {
    return this.taskService.getTotalTasks();
  }

  getTotalCompletedTasks(): number {
    return this.taskService.getTotalCompletedTasks();
  }
}
