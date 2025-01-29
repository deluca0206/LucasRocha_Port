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
        
        cy.get('a[href*="register.htm;jsessionid="]').click()
        cy.xpath("//h1[@class='title'][contains(.,'Signing up is easy!')]").should("be.visible")
        cy.fillRegistrationForm(userData);
        cy.xpath("//input[contains(@value,'Register')]").click()
        cy.xpath("//p[contains(.,'Your account was created successfully. You are now logged in.')]").should("be.visible")

    });

    it('preenche o login e clica em no botão "log in"', () => {
        
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
        cy.xpath("//input[contains(@type,'text')]").type(userData.username)
        cy.xpath("//input[contains(@type,'password')]").type(userData.password)
        cy.xpath("//input[contains(@type,'submit')]").click()
    
    });
    
    });