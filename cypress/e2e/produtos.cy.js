/// <reference types="cypress" />

describe('Funcionalidade Página de Produto', () => {

    beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/produtos/")

});
    it("Deve selecionar o produto", () => {

        cy.get('[class="product-block grid"]')
            //cy.get('.post-2559 > .product-block > .block-inner > .image > .product-image > .image-hover').click();
            .contains("Abominable Hoodie")
            .click()
            
    });

    it.only("Deve adicionar um produto no carrinho", () => {
        var quant = 7

        cy.get('[class="product-block grid"]')
        .contains("Abominable Hoodie").click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quant)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should("contain", quant)
        cy.get('.woocommerce-message').should("contain", quant +" × “Abominable Hoodie” foram adicionados no seu carrinho")

    });
});