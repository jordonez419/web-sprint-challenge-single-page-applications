
describe('Visits my site', function () {
    //Arrange
    it('Visits a new site', function () {
        // Act
        cy.visit("http://localhost:3000/pizza");
    })
})


describe('checks if user can fill out and submit form', function () {

    it('Filling out form and submitting', function () {
        cy.get('input[name=name]')
            .type('John Doe')
            .should('have.value', 'John Doe')
        cy.get('select').select('Small')
        cy.get('input[name=topping1]')
            .click()
        cy.get('input[name=topping2]')
            .click()
        cy.get('input[name=topping3]')
            .click()
        cy.get('input[name=topping4]')
            .click()
        cy.get('button[name=submit]')
            .click()
    })
})
