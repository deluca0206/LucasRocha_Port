/// <reference types="cypress" />

describe('tasks', () => {

    context('cadastro', () => {
        
        let testData;
        

        beforeEach(() => {            
            cy.fixture('tasks').then(t => {
                testData = t
            })
            const pageTitle = 'Gerencie suas tarefas com Mark L'
            cy.visit('http://localhost:8080/');
            cy.title().should('eq', pageTitle);
            cy.get('input#newTask').as('inputTask')
        });
    
        it('deve cadastrar uma nova tarefa', () => {
    
            const taskName = 'Ler um livro de JavaScript'
    
            cy.removeTask(taskName)
            cy.createTask(taskName)
    
            cy.contains('p', taskName).should("be.visible");
        
        });
    
        it('não deve cadastrar um tarefa duplicada', () => {
    
            const task = testData.dup
            cy.removeTask(task.name)
            cy.createTask(task.name)
            cy.createTask(task.name)
            
            cy.get('div#swal2-html-container').should('be.visible').should('have.text', 'Task already exists!')
        });
    
        it('não deve cadastrar task com campo de preenchimento vazio', () => {
    
            cy.createTask()
            cy.isRequired('This is a required field') 
        });
    });
    context('autalização', () => {
        
        beforeEach(() => {
            const pageTitle = 'Gerencie suas tarefas com Mark L'
            cy.visit('http://localhost:8080/');
            cy.title().should('eq', pageTitle);
            cy.get('input#newTask').as('inputTask')
            
        });

        it('deve concluir uma tarefa', () => {
            const taskName = 'Pagar contas de consumo'

            cy.removeTask(taskName)
            cy.createTask(taskName)
            cy.toggleClick(taskName)
        });
    });


});