import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';

interface Task {
  text: string;
  completed: boolean;
}

@Component({
  imports: [FormsModule, NgForOf],
  selector: 'todo-root',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  tasks: Task[] = [];
  newTask = '';

  addTask() {
    const text = this.newTask.trim();
    if (text) {
      this.tasks.push({ text, completed: false });
      this.newTask = '';
    }
  }

  toggleTask(task: Task) {
    task.completed = !task.completed;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
