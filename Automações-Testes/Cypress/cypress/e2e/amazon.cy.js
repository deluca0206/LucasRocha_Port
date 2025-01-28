/// <reference types="cypress" />

describe('Simulação de compra na Amazon', () => {
    beforeEach(() => {
        cy.visit('https://www.amazon.com.br/')
    });

    it('Pesquisando produto e acessando carrinho', () => {
        cy.title().should('eq', 'Amazon.com.br | Tudo pra você, de A a Z.')
        cy.get('body input#twotabsearchtextbox').type('Xbox Series S')
        cy.get('body input#nav-search-submit-button').click()
        
        cy.contains('span.a-color-state.a-text-bold', 'Xbox Series S').should('be.visible');
        cy.contains('h2 span', 'Console Xbox Series S').click()
        cy.contains('body.a-aui_72554-c', 'Console Xbox Series S').should('be.visible')
        cy.get('input[data-hover="Selecione <b>__dims__</b> à esquerda<br> para adicionar ao Carrinho de compras"]').click()
        cy.wait(2000)
        cy.lidarComOferta()
        
    });
});