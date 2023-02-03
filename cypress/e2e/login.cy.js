/// <reference types="cypress" />

context ('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') 
    });
    
   afterEach(() => {
        cy.screenshot()

   });


    it ('Deve fazer login com sucesso', () => {

        
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should("contain", "Minha conta")
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should("contain", "Olá")

    })

    it('Deve exibir uma mensagem de erro ao inserir usuários inválidos', () => {

       
        cy.get('#username').type('teste@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should("contain", "Perdeu a senha?")

        
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválidos', () => {

        
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Perdeu a senha?')


    })
})