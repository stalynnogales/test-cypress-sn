// Signup
Cypress.Commands.add('signup', (username, password) => {
  return cy.request({
    method: 'POST',
    url: '/signup',
    body: { username, password },
    failOnStatusCode: false
  });
});

// Login
Cypress.Commands.add('login', (username, password) => {
  return cy.request({
    method: 'POST',
    url: '/login',
    body: { username, password },
    failOnStatusCode: false
  });
});
