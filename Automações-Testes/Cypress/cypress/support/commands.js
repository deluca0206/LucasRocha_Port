// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('lidarComOferta', ()=> {
    // Tenta localizar o botão "Não, obrigado(a)" e lida com a ausência
    cy.xpath("//input[contains(@aria-labelledby,'attachSiNoCoverage-announce')]", { timeout: 5000 })
        .should(Cypress._.noop) // No-op para evitar falha no Cypress
        .then(($button) => {
            if ($button.length > 0) {
                cy.log('Botão encontrado, clicando...');
                cy.wrap($button).click({ force: true }); 
                cy.get('div[id="attachDisplayAddBaseAlert"] h4').should('be.visible')
            } else {
                cy.log('Botão "Não, obrigado(a)" não encontrado. Continuando o teste...');
                cy.contains('h1.a-color-base', 'Adicionado ao carrinho').should('be.visible')
            }
        });
})

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