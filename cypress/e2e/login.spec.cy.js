
describe('Example Test', () => {
        
    it('valid login', () => {
        cy.get('[data-test=username]').fill('standard_user')
        cy.get('[data-test=password]').fill('secret_sauce')
        cy.get('[data-test=login-button]').click()
    });

    it('Invalid Login - Incorrect Username', () => {
        cy.get('[data-test=username]').fill('invalid_user')
        cy.get('[data-test=password]').fill('secret_sauce')
        cy.get('[data-test=login-button]').click()
        cy.get('[data-test=error]').should('contain', 'Username and password do not match')
    });
});
        