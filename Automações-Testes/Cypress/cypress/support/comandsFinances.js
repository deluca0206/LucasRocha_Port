Cypress.Commands.add('criarTransacao', (descricao, valor) => {
    cy.contains("Nova Transação").click()
    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type("2023-02-15")
    cy.contains("button", "Salvar").click()
  })
  
  Cypress.Commands.add('deletarTransacoes', () => {
      for (let i = 0; i < 5; i++) {
          cy.get('[data-index="0"] > :nth-child(4) > img').click();
          cy.wait(1000)
      }
  })
  
  Cypress.Commands.add('deletarTransacoesEsp',(descricao) => {
          cy.contains('tr', descricao).find(':nth-child(4) > img').click();
          cy.contains("tr", descricao).should("not.exist")
  })