import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type TaskFilter = 'all' | 'active' | 'completed';

export interface Task {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private currentFilter: TaskFilter = 'all';
  private filteredTasksSubject = new BehaviorSubject<Task[]>([]);
  filteredTasks$ = this.filteredTasksSubject.asObservable();

  constructor() {
    this.updateFilteredTasks();
  }

 private nextId = 1;

addTask(text: string) {
  const newTask: Task = {
    id: this.nextId++,
    text,
    completed: false,
    createdAt: new Date()
  };
  this.tasks.push(newTask);
  this.updateFilteredTasks();
}

 deleteTasks(id: number) {
  this.tasks = this.tasks.filter(task => task.id !== id);
  this.updateFilteredTasks();
}

  updateTask(index: number, newText: string) {
    if (this.tasks[index]) {
      this.tasks[index].text = newText;
      this.updateFilteredTasks();
    }
  }

toggleTaskCompletion(id: number) {
  const task = this.tasks.find(t => t.id === id);
  if (task) {
    task.completed = !task.completed;
    this.updateFilteredTasks();
  }
}

  setFilter(filter: TaskFilter) {
    this.currentFilter = filter;
    this.updateFilteredTasks();
  }

  getTotalTasks(): number {
    return this.tasks.length;
  }

  getTasks(): Task[] {
    return [...this.tasks];
  }

  private updateFilteredTasks() {
    let filtered: Task[];
    if (this.currentFilter === 'active') {
      filtered = this.tasks.filter(t => !t.completed);
    } else if (this.currentFilter === 'completed') {
      filtered = this.tasks.filter(t => t.completed);
    }else if (this.currentFilter === 'all') {
      filtered = [...this.tasks];
    } 
    else {
      filtered = [...this.tasks];
    }
    this.filteredTasksSubject.next(filtered);
  }
}