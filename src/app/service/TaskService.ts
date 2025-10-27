<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { Task } from './TaskModel';
=======
import { Injectable } from "@angular/core";

export interface Task {
  text: string;
  completed: boolean;
}
>>>>>>> 2d055a602cad83090f0605afe0f7904ffee1d1c8

@Injectable({
  providedIn: 'root'
})
export class TaskService {
<<<<<<< HEAD
  private taskList: Task[] = [];

  addTask(task: string): void {
    if (task.trim() !== '') {
      this.taskList.push({
        id: Date.now(), // unique ID
        text: task,
        completed: false
      });
    }
  }

  deleteTask(index: number): void {
    this.taskList.splice(index, 1);
=======
  taskList: Task[] = [];

  addTask(task: string): void {
    if (task.trim() !== '') {
      this.taskList.push({ text: task, completed: false });
    }
  }

  deleteTasks(index: number): void{
      this.taskList.splice(index, 1);
>>>>>>> 2d055a602cad83090f0605afe0f7904ffee1d1c8
  }

  getTasks(): Task[] {
    return [...this.taskList];
  }
<<<<<<< HEAD

  toggleTaskCompletion(index: number): void {
=======
  

  toggleTaskCompletion(index: number): void{
>>>>>>> 2d055a602cad83090f0605afe0f7904ffee1d1c8
    if (index >= 0 && index < this.taskList.length) {
      this.taskList[index].completed = !this.taskList[index].completed;
    }
  }

  getTotalTasks(): number {
    return this.taskList.length;
  }
<<<<<<< HEAD

  getTotalCompletedTasks(): number {
    return this.taskList.filter(task => task.completed).length;
  }

  getFilteredTasks(filter: 'all' | 'active' | 'completed'): Task[] {
    switch (filter) {
      case 'active':
        return this.taskList.filter(task => !task.completed);
      case 'completed':
        return this.taskList.filter(task => task.completed);
      default:
        return [...this.taskList];
    }
=======
  getTotalCompletedTasks(index: number){
    let completedTask = 0;
    if(this.taskList[index].completed){
        completedTask++;
    }
     return completedTask;
>>>>>>> 2d055a602cad83090f0605afe0f7904ffee1d1c8
  }
}
