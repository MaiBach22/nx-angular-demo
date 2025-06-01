import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';

interface Task {
  text: string;
  completed: boolean;
}

@Component({
  imports: [FormsModule, NgForOf],
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
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
