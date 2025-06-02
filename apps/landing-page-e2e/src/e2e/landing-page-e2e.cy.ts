
describe('landing-page-e2e', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display header', () => {
    cy.get('lib-header').should('exist');
  });

  it('should display the main content with headline and description', () => {
    cy.contains('INTRUCING').should('exist');
    cy.get('.description').should('contain.text', 'Nx is a smart and extensible build framework');
  });

  it('should display the call-to-action buttons', () => {
    cy.get('.btn-get-started')
      .should('exist')
      .and('contain.text', 'Documentation');

    cy.get('.btn-signing-main')
      .should('exist')
      .and('contain.text', 'Get started');
  });

  it('should display the 3D spline viewer', () => {
    cy.get('spline-viewer')
      .should('have.attr', 'url')
      .and('include', 'spline.design');
  });

  it('should have image gradient and blur layer', () => {
    cy.get('.image-gradient').should('have.attr', 'src').and('include', 'gradient.png');
    cy.get('.layer-blur').should('exist');
  });
});
