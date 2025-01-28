/// <reference types="cypress" />

describe('Transações', () => {

    beforeEach(() => {
        cy.visit("https://dev-finance.netlify.app/#")
    });

    it('Cadastrar transações e Deleta todas as transações', () => {

        cy.criarTransacao("Freelancer 1", 250)
        cy.criarTransacao("Cinema", -50)
        cy.criarTransacao("Freelancer 2", 150)
        cy.criarTransacao("Mercado", -100)
        cy.criarTransacao("Freelancer 3", 100)
        cy.deletarTransacoes()
    });
    it('Cadastra Transações e deleta transações especificas', () => {
        cy.criarTransacao("Freelancer 1", 250)
        cy.criarTransacao("Cinema", -50)
        cy.criarTransacao("Freelancer 2", 150)
        cy.criarTransacao("Mercado", -100)
        cy.criarTransacao("Freelancer 3", 100)
        cy.deletarTransacoesEsp("Cinema")
        cy.deletarTransacoesEsp("Mercado")

    });
    
});