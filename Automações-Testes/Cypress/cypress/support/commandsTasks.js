Cypress.Commands.add('removeTask', (taskName) => {
    cy.get('[data-testid="task-item"]').each(($task) => {
        if ($task.find('p').text() === taskName) {
            cy.wrap($task).find('button[class*="_listItemDeleteButton"]').click();
            cy.contains('p', taskName).should('not.exist');
        }
    })
});

Cypress.Commands.add('createTask', (taskName = '')=> {
    if (taskName !== '') {
        cy.get('@inputTask').type(taskName);
    }
    cy.contains('button', 'Create').click();
})

Cypress.Commands.add('isRequired', (targetMassage) => {
    cy.get('@inputTask').invoke('prop', 'validationMessage').should((text) =>{
        expect(targetMassage).to.eq(text)
    })
});

Cypress.Commands.add('toggleClick', (taskName) => {
    cy.contains('p', taskName)
        .parent().find('button[class*=_listItemToggle]').click()
        cy.contains('p', taskName)
        .should('have.css', 'text-decoration-line', 'line-through')
});