import { Injectable } from '@angular/core'

export interface Task {
  id: number;
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
    this.taskList.push({
      text: task,
      completed: false,
      id: Date.now() // ✅ unique ID based on timestamp
    });
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
  getTotalCompletedTasks(): number{
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
}
  
}
