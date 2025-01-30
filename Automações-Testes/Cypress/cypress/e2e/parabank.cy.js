/// <reference types="cypress" />

describe('Faz cadastro Parabank', () => {
    let userData

    beforeEach(() => {
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
        cy.generateUserData().then((data) => {
            userData = data;
        });
    });
    it('preenche o Cadastro e clica em cadastrar', () => {
        
        cy.contains('a', 'Register').click()
        cy.contains('h1', 'Signing up is easy!').should("be.visible")
        cy.fillRegistrationForm(userData);
        cy.contains('input', 'Register').click()
        cy.contains('h1.title', 'Welcome').should('be.visible');
        cy.wait(1000)

    });

    it('preenche o login e clica em no botão "log in"', () => {
        
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
        cy.get("input[name='username']").type('theboris')
        cy.get("input[name='password']").type('123456')        
        cy.get("input.button[type='submit']").click()
        cy.contains('h1' , 'Accounts Overview').should('be.visible')
    
    });
    
    });