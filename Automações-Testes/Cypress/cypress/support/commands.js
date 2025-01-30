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
    cy.get("span#attachSiNoCoverage-announce")
        .should(Cypress._.noop)
        .then(($button) => {
            if ($button.length > 0) {
                cy.log('Botão encontrado, clicando...');
                cy.wrap($button).click({ force: true }); 
                cy.get('div[id="attachDisplayAddBaseAlert"] h4').should('be.visible')
            } else {                
                cy.contains('h1.a-color-base', 'Adicionado ao carrinho').should('be.visible')
            }
        });
})



Cypress.Commands.add('generateUserData', () => {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        phone: faker.phone.number(),
        ssn: faker.finance.pin(),
        username: `${faker.person.firstName()}${faker.person.lastName()}hks`,
        password: faker.internet.password()
    };
});

Cypress.Commands.add('fillRegistrationForm', (userData) => {
    cy.get('#customer\\.firstName').type(userData.firstName);
    cy.get('#customer\\.lastName').type(userData.lastName);
    cy.get('#customer\\.address\\.street').type(userData.address);
    cy.get('#customer\\.address\\.city').type(userData.city);
    cy.get('#customer\\.address\\.state').type(userData.state);
    cy.get('#customer\\.address\\.zipCode').type(userData.zipCode);
    cy.get('#customer\\.phoneNumber').type(userData.phone);
    cy.get('#customer\\.ssn').type(userData.ssn);
    cy.get('#customer\\.username').type(userData.username);
    cy.get('#customer\\.password').type(userData.password);
    cy.get('#repeatedPassword').type(userData.password);
});