/// <reference types="cypress" />

describe('Transações', () => {

    beforeEach(() => {
        cy.visit("https://dev-finance.netlify.app/#")
    });

    it('Cadastrar transações e Deleta todas as transações', () => {

        criarTransacao("Freelancer 1", 250)
        cy.get("tbody tr").eq(0).find("td.description").should("have.text", "Freelancer 1")
        criarTransacao("Cinema", -50)
        cy.get("tbody tr").eq(1).find("td.description").should("have.text", "Cinema")
        criarTransacao("Freelancer 2", 150)
        cy.get("tbody tr").eq(2).find("td.description").should("have.text", "Freelancer 2")
        criarTransacao("Mercado", -100)
        cy.get("tbody tr").eq(3).find("td.description").should("have.text", "Mercado")
        criarTransacao("Freelancer 3", 100)
        cy.get("tbody tr").eq(4).find("td.description").should("have.text", "Freelancer 3")

        deletarTransacoes()
    });
    it('Cadastra Transações e deleta transações especificas', () => {
        criarTransacao("Freelancer 1", 250)
        cy.get("tbody tr").eq(0).find("td.description").should("have.text", "Freelancer 1")
        criarTransacao("Cinema", -50)
        cy.get("tbody tr").eq(1).find("td.description").should("have.text", "Cinema")
        criarTransacao("Freelancer 2", 150)
        cy.get("tbody tr").eq(2).find("td.description").should("have.text", "Freelancer 2")
        criarTransacao("Mercado", -100)
        cy.get("tbody tr").eq(3).find("td.description").should("have.text", "Mercado")
        criarTransacao("Freelancer 3", 100)
        cy.get("tbody tr").eq(4).find("td.description").should("have.text", "Freelancer 3")


        deletarTransacoesEsp("Cinema")
        deletarTransacoesEsp("Mercado")

    });
    
});

function criarTransacao(descricao, valor) {
  cy.contains("Nova Transação").click()
  cy.get('#description').type(descricao)
  cy.get('#amount').type(valor)
  cy.get('#date').type("2023-02-15")
  cy.contains("button", "Salvar").click()
}

function deletarTransacoes() {
    for (let i = 0; i < 5; i++) {
        cy.get('[data-index="0"] > :nth-child(4) > img').click();
        cy.wait(1000)
    }
}

function deletarTransacoesEsp(descricao) {
        cy.contains('tr', descricao).find(':nth-child(4) > img').click();
        cy.contains("tr", descricao).should("not.exist")
}
