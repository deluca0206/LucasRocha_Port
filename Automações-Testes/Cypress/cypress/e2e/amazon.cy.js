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
        lidarComOferta()
        
    });
});

function lidarComOferta() {
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
}