/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when username is empty
 *   - should display homepage when username and password are correct
 */

describe('LoginPage spec', () => {
  it('should display login page correctly', () => {
    cy.visit('http://localhost:5173/login')

    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button').contains(/^Masuk$/).should('be.visible');
  })

  it('should display alert when username is empty', () => {
    cy.visit('http://localhost:5173/login')
    cy.get('button').contains(/^Masuk$/).click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  })

  it('should display homepage when username and password are correct', async () => {
    cy.visit('http://localhost:5173/login')

    cy.get('input[placeholder="Email"]').type('rizkycoba@tadinyatwitter.id');
    cy.get('input[placeholder="Password"]').type('12345678');

    await cy.get('button').contains(/^Masuk$/).click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Berhasil Login');
    });
  })
})