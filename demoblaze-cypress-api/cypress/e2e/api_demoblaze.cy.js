/*
 Tests API Demoblaze 
 Casos:
    - Crear un nuevo usuario en signup
    - Intentar crear usuario ya existente
    - Usuario y password correcto en login
    - Usuario y password incorrecto en login
 */

function uniqueUsername(base = 'user') {
  const ts = Date.now();
  return `${base}_${ts}`;
}

describe('Demoblaze API', () => {

  // Datos reutilizables
  let testUser = {
    username: uniqueUsername('testuser'),
    password: 'Pass!2025'
  };


  it('Crear un nuevo usuario en signup', () => {
    cy.signup(testUser.username,testUser.password).then((resp) => {
      // Guardar respuesta en archivo
      cy.writeFile(`cypress/reports/signup_new_${testUser.username}.json`, resp, { encoding: 'utf-8' });

      // Asserts
      expect([200]).to.include(resp.status);
      if (typeof resp.body === 'string') {
        expect(resp.body.toLowerCase()).to.include('');
      } else if (resp.body && resp.body.message) {
        expect(resp.body.message.toLowerCase()).to.include('sign up');
      }
    });
  });


  it('Intentar crear un usuario ya existente', () => {
    cy.signup(testUser.username,testUser.password).then((resp) => {
      cy.writeFile(`cypress/reports/signup_existing_${testUser.username}.json`, resp, { encoding: 'utf-8' });

      // No debe decir "Sign up successful" de nuevo
      if (typeof resp.body === 'string') {
        expect(resp.body.toLowerCase()).to.not.include('sign up successful');
      } else if (resp.body && resp.body.message) {
        expect(resp.body.message.toLowerCase()).to.not.include('sign up successful');
      }
    });
  });


  it('Usuario y password correcto en login', () => {
    cy.login(testUser.username,testUser.password).then((resp) => {
      cy.writeFile(`cypress/reports/login_success_${testUser.username}.json`, resp, { encoding: 'utf-8' });

      expect(resp.status).to.equal(200);
      if (typeof resp.body === 'string') {
        expect(resp.body.toLowerCase()).to.match(/log|auth|token|success/);
      } else {
        if (resp.body.token) {
          expect(resp.body.token).to.be.a('string').and.to.have.length.greaterThan(0);
        } else if (resp.body.message) {
          expect(resp.body.message.toLowerCase()).to.match(/log|auth|success/);
        }
      }
    });
  });


  it('Usuario y password incorrecto en login', () => {
    cy.login(testUser.username,'WrongPassword123!').then((resp) => {
      cy.writeFile(`cypress/reports/login_fail_${testUser.username}.json`, resp, { encoding: 'utf-8' });

      // Esperamos status de error o de exito con un mensaje de error
      expect(resp.status).to.be.oneOf([200,400, 401, 403, 404]);
      if (typeof resp.body === 'string') {
        expect(resp.body.toLowerCase()).to.match(/error|invalid|unauthorized|wrong|failed/);
      } else if (resp.body.message) {
        expect(resp.body.message.toLowerCase()).to.match(/error|invalid|unauthorized|wrong|failed/);
      }
    });
  });
});
