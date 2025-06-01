import { bootstrapApplication } from '@angular/platform-browser';
import { todoConfig } from './app/todo.config';
import { TodoComponent } from './app/todo.component';

bootstrapApplication(TodoComponent, todoConfig).catch((err) =>
  console.error(err)
);
