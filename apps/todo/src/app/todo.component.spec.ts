import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  beforeEach( () => {
    component = new TodoComponent();
  });

  it('should initialize with an empty task list and newTask', () => {
    expect(component.tasks).toEqual([]);
    expect(component.newTask).toBe('');
  });

  describe('addTask', () => {
    it('should add a task when newTask is not empty', () => {
      component.newTask = 'Learn Nx';
      component.addTask();

      expect(component.tasks.length).toBe(1);
      expect(component.tasks[0]).toEqual({ text: 'Learn Nx', completed: false });
      expect(component.newTask).toBe('');
    })

    it('should not add a task when newTask is empty', () => {
      component.newTask = '';
      component.addTask();

      expect(component.tasks.length).toBe(0);
    });
  });

  describe('toggleTask', () => {
    it('should toggle the completed status of a task', () => {
      const task = { text: 'Say Mai is cute every morning', completed: false };
      component.tasks.push(task);

      component.toggleTask(task);
      expect(task.completed).toBe(true);

      component.toggleTask(task);
      expect(task.completed).toBe(false);
    });
  })

  describe('deleteTask', () => {
    it('should delete a task by index', () => {
      component.tasks = [
        { text: 'Say Mai is cute everyday', completed: false },
        { text: 'Working with happy mood', completed: false },
      ];

      component.deleteTask(0);
      expect(component.tasks.length).toBe(1);
      expect(component.tasks[0].text).toBe('Working with happy mood');

      component.deleteTask(0);
      expect(component.tasks.length).toBe(0);
    });
  });
});
