
// Login
Cypress.Commands.add('loginSauceDemo', (username, password) => {
  cy.visit('/'); // baseUrl is defined in config
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();

  // Verify successful login
  cy.url().should('include', '/inventory.html');
});

// Agregar producto a carrito
Cypress.Commands.add('addProductToCart', (productName) => {
  // Find the product by name and click "Add to cart"
  cy.contains('.inventory_item_name', productName)
    .parents('.inventory_item')
    .find('button')
    .click();
});

// Completar checkout
Cypress.Commands.add('completeCheckout', (firstName, lastName, postalCode) => {
  cy.get('[data-test="firstName"]').type(firstName);
  cy.get('[data-test="lastName"]').type(lastName);
  cy.get('[data-test="postalCode"]').type(postalCode);
  cy.get('[data-test="continue"]').click();
});
