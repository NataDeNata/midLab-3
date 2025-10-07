import { Injectable } from "@angular/core";

export interface Task {
  text: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskList: Task[] = [];

  addTask(task: string): void {
    if (task.trim() !== '') {
      this.taskList.push({ text: task, completed: false });
    }
  }

  deleteTasks(index: number): void{
      this.taskList.splice(index, 1);
  }

  getTasks(): Task[] {
    return [...this.taskList];
  }
  

  toggleTaskCompletion(index: number): void{
    if (index >= 0 && index < this.taskList.length) {
      this.taskList[index].completed = !this.taskList[index].completed;
    }
  }

  getTotalTasks(): number {
    return this.taskList.length;
  }
  getTotalCompletedTasks(index: number){
    let completedTask = 0;
    if(this.taskList[index].completed){
        completedTask++;
    }
     return completedTask;
  }
}
