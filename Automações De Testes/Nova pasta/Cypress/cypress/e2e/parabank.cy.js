/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

const randomfName = faker.person.firstName();
const randomlName = faker.person.lastName();
const randomAndress = faker.location.streetAddress();
const randomCity = faker.location.city();
const randomState = faker.location.state();
const randomzCode= faker.location.zipCode();
const randomPhone = faker.phone.number();
const randomSSN = faker.finance.pin();
const randomaName = `${faker.person.firstName()}${faker.person.lastName()}khf`;
const randomPass = faker.internet.password();

describe('Faz cadastro Parabank', () => {
    
    it('preenche o Cadastro e clica em cadastrar', () => {
        
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")

        cy.xpath("//a[contains(.,'Register')]").should("be.visible").click()
        cy.xpath("//h1[@class='title'][contains(.,'Signing up is easy!')]").should("be.visible")
        
        cy.get('#customer\\.firstName').type(randomfName)
        cy.get('#customer\\.lastName').type(randomlName)
        cy.get('#customer\\.address\\.street').type(randomAndress)
        cy.get('#customer\\.address\\.city').type(randomCity)
        cy.get('#customer\\.address\\.state').type(randomState)
        cy.get('#customer\\.address\\.zipCode').type(randomzCode)
        cy.get('#customer\\.phoneNumber').type(randomPhone)
        cy.get('#customer\\.ssn').type(randomSSN)

        cy.get('#customer\\.username').type(randomaName)
        cy.get('#customer\\.password').type(randomPass)
        cy.get('#repeatedPassword').type(randomPass)

        cy.xpath("//input[contains(@value,'Register')]").click()

        cy.xpath("//p[contains(.,'Your account was created successfully. You are now logged in.')]").should("be.visible")
    });

});