

describe('todo-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should load the app with empty task list', () => {
    cy.get('[data-testid="task"]').should('have.length', 0);
  });

  it('should add a new task', () => {
    cy.get('[data-testid="new-task"]').type('Buy groceries');
    cy.get('[data-testid="add-task"]').click();

    cy.get('[data-testid="task"]').should('have.length', 1);
    cy.get('[data-testid="task"]').first().should('contain.text', 'Buy groceries');
  });

  it('should mark a task as complete and then incomplete', () => {
    cy.get('[data-testid="new-task"]').type('Walk the dog');
    cy.get('[data-testid="add-task"]').click();

    cy.get('[data-testid="task"]').click();
    cy.get('[data-testid="task"]').should('have.class', 'completed');});

  it('should delete a task', () => {
    cy.get('[data-testid="new-task"]').type('Read book');
    cy.get('[data-testid="add-task"]').click();

    cy.get('[data-testid="task"]').should('have.length', 1);
    cy.get('.delete-btn').click();
    cy.get('[data-testid="task"]').should('have.length', 0);
  });

  it('should trim and ignore empty tasks', () => {
    cy.get('[data-testid="new-task"]').type('   ');
    cy.get('[data-testid="add-task"]').click();

    cy.get('[data-testid="task"]').should('have.length', 0);
  });
});
