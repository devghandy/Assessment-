// Import commands.js using ES2015 syntax:
import './commands';
import 'cypress-fill-command'

beforeEach(()=>{
        cy.visit('/');
    })