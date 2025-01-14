/// <reference types="cypress" />

describe('Faz cadastro Parabank', () => {
    
    it('preenche o Cadastro e clica em cadastrar', () => {
        
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")

        cy.xpath("//input[contains(@type,'text')]").type("theboris")

        cy.xpath("//input[contains(@type,'password')]").type("123456")

        cy.xpath("//input[contains(@type,'submit')]").click()

    });

});