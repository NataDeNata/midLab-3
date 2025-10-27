import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../service/TaskService';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  inputText: string = '';
  constructor(private taskService: TaskService) { }

  onSubmit(): void {
    if (this.inputText.trim() === '') {
      alert("Task cannot be empty!");
      return;
    }
    this.taskService.addTask(this.inputText);
    alert("Task added successfully!");
    this.inputText = '';
  }
}

