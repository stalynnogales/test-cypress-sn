describe('SauceDemo E2E Flujo compra', () => {

    it('Debería completar una compra completa con éxito', () => {

        // 1. Iniciamos sesión con las credenciales que nos indica el ejercicio
        cy.loginSauceDemo('standard_user', 'secret_sauce');


        // 2: Agregamos dos productos al carrito
        cy.addProductToCart('Sauce Labs Backpack');
        cy.addProductToCart('Sauce Labs Fleece Jacket');


        // 3: Verificar los productos en el carrito
        cy.get('.shopping_cart_link').click();
        cy.url().should('include', '/cart.html');
        cy.contains('Sauce Labs Backpack').should('exist');
        cy.contains('Sauce Labs Fleece Jacket').should('exist');


        // 4: Procedemos a realizar el Checkout
        cy.get('[data-test="checkout"]').click();


        // 5: Completamos el formulario de Checkout
        cy.completeCheckout('Stalyn', 'Nogales', '12345');
        

        // 6: Finalizamos la compra
        cy.get('[data-test="finish"]').click();


        // 7: Verificamos el mensaje de confirmación
        cy.contains(/thank you for your order/i, { timeout: 10000 })
            .invoke('text')
            .then((text) => {
                expect(text.toUpperCase()).to.include('THANK YOU FOR YOUR ORDER');
            });

        cy.screenshot('order-confirmation');
    });

});
