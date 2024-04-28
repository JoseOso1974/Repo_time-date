describe('Obtener hora de una ciudad', () => {
    it('Test de obtener hora de una ciudad', () => {
        cy.visit('https://automationexercise.com/')
        cy.get(':nth-child(2) > .panel-heading > .panel-title > a > .badge > .fa').click()
        cy.get('#Men > .panel-body > ul > :nth-child(2) > a').click()
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
 })

 it('Test de login', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="signup-name"]').type('Oso')
    cy.get('[data-qa="signup-email"]').type('oemy19@hotmail.com')
    cy.get('[data-qa="signup-button"]').click()

}) 

it('Datos login', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('#id_gender1').click()





})

})