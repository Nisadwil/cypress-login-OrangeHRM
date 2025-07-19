describe('Quiz-3', () => {

  it('1. User fails to log in without entering username and password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //action
    cy.get('button[type="submit"]').click(); //klik tombol login tanpa mengisi username dan password
    //assertion
    cy.get('input[name="username"]')
      .parents('.oxd-input-group')
      .find('.oxd-input-field-error-message')
      .should('contain', 'Required');
    cy.get('input[name="password"]')
      .parents('.oxd-input-group')
      .find('.oxd-input-field-error-message')
      .should('contain', 'Required');
 });

  it('2. User fails to log in without entering password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //action
    cy.get('input[placeholder="Username"]').type('Admin'); //mengisi username
    cy.get('button[type="submit"]').click(); //klik tombol login tanpa mengisi password
    //assertion
    cy.get('input[name="password"]')
      .parents('.oxd-input-group')
      .find('.oxd-input-field-error-message')
      .should('contain', 'Required');
  });

  it('3. User fails to log in without entering username', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //action
    cy.get('input[placeholder="Password"]').type('admin123'); //mengisi password
    cy.get('button[type="submit"]').click(); //klik tombol login tanpa mengisi username
    //assertion
    cy.get('input[name="username"]')
      .parents('.oxd-input-group')
      .find('.oxd-input-field-error-message')
      .should('contain', 'Required');
  });

  it('4. User fails to log in with invalid username & password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //action
    cy.get('input[placeholder="Username"]').type('testing'); //mengisi username yang salah
    cy.get('input[placeholder="Password"]').type('123'); //mengisi password yang salah
    cy.get('button[type="submit"]').click(); //klik tombol login dengan username dan password yang salah
    //assertion
    cy.get('.oxd-alert-content-text')
      .should('be.visible')
      .and('contain', 'Invalid credentials');
  });
     
  it('5. User fails to log in with invalid password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //action
    cy.get('input[placeholder="Username"]').type('Admin'); //mengisi username yang benar
    cy.get('input[placeholder="Password"]').type('123'); //mengisi password yang salah
    cy.get('button[type="submit"]').click(); //klik tombol login dengan username yang benar dan password yang salah
    //assertion
    cy.get('.oxd-alert-content-text')
      .should('be.visible')
      .and('contain', 'Invalid credentials');
  });

  it('6. User fails to log in with invalid username', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //action
    cy.get('input[placeholder="Username"]').type('testing'); //mengisi username yang salah
    cy.get('input[placeholder="Password"]').type('admin123'); //mengisi password yang benar
    cy.get('button[type="submit"]').click();//klik tombol login dengan username yang salah dan password yang benar
    //assertion
    cy.get('.oxd-alert-content-text')
      .should('be.visible')
      .and('contain', 'Invalid credentials');
  });

  it('7. User successfully logs in', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //action
    cy.get('input[placeholder="Username"]').type('Admin'); //mengisi username yang benar
    cy.get('input[placeholder="Password"]').type('admin123'); //mengisi password yang benar
    cy.get('button[type="submit"]').click(); //klik tombol login dengan username dan password yang benar
    //assertion
    cy.get('.oxd-topbar-header-breadcrumb-module')
      .should('be.visible')
      .and('have.text', 'Dashboard');
    cy.get('img[alt="client brand banner"]').should('be.visible');
  });
})