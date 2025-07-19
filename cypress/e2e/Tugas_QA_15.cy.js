describe('Login page', () => {

      it('1. User fails to log in without entering username and password', () => {
        cy.visit('https://www.saucedemo.com/v1/index.html');

        //action
        cy.get('#login-button').click(); //klik tombol login tanpa mengisi username dan password

        //assertion
        cy.get('[data-test="error"]').should('be.visible'); // memastikan elemen error terlihat
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username is required'); // memastikan pesan error yang benar muncul
      });

     it('2. User fails to log in without entering password', () => {
       cy.visit('https://www.saucedemo.com/v1/index.html');

        //action
       cy.get('#user-name').type('standard_user'); //mengisi username
       cy.get('#login-button').click(); //klik tombol login tanpa mengisi password

       //assertion
       cy.get('[data-test="error"]').should('be.visible'); // memastikan elemen error terlihat
       cy.get('[data-test="error"]').should('contain', 'Epic sadface: Password is required');// memastikan pesan error yang benar muncul
     });

     it('3. User fails to log in without entering username', () => {
       cy.visit('https://www.saucedemo.com/v1/index.html');

       //action
       cy.get('#password').type('secret_sauce'); //mengisi password
       cy.get('#login-button').click(); //klik tombol login tanpa mengisi username

       //assertion
       cy.get('[data-test="error"]').should('be.visible'); // memastikan elemen error terlihat
       cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username is required'); // memastikan pesan error yang benar muncul
     });

     it('4. User fails to log in with invalid username & password', () => {
       cy.visit('https://www.saucedemo.com/v1/index.html');

       //action
       cy.get('#user-name').type('testing'); //mengisi username yang salah
       cy.get('#password').type('123'); //mengisi password yang salah
       cy.get('#login-button').click(); //klik tombol login dengan username dan password yang salah

       //assertion
       cy.get('[data-test="error"]').should('be.visible'); // memastikan elemen error terlihat
       // memastikan pesan error yang benar muncul
       cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service'); 
     });
     
     it('5. User fails to log in with invalid password', () => {
       cy.visit('https://www.saucedemo.com/v1/index.html');

       //action
       cy.get('#user-name').type('standard_user'); //mengisi username yang benar
       cy.get('#password').type('123'); //mengisi password yang salah
       cy.get('#login-button').click(); //klik tombol login dengan username yang benar dan password yang salah

       //assertion
       cy.get('[data-test="error"]').should('be.visible'); // memastikan elemen error terlihat
       // memastikan pesan error yang benar muncul
       cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service');
     });

     it('6. User fails to log in with invalid username', () => {
       cy.visit('https://www.saucedemo.com/v1/index.html');

       //action
       cy.get('#user-name').type('testing'); //mengisi username yang salah
       cy.get('#password').type('secret_sauce'); //mengisi password yang benar
       cy.get('#login-button').click();//klik tombol login dengan username yang salah dan password yang benar

       //assertion
       cy.get('[data-test="error"]').should('be.visible'); // memastikan elemen error terlihat
       // memastikan pesan error yang benar muncul
       cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service');
     });

      it('7. User successfully logs in', () => {
        cy.visit('https://www.saucedemo.com/v1/index.html');

        //action
        cy.get('#user-name').type('standard_user'); //mengisi username yang benar
        cy.get('#password').type('secret_sauce'); //mengisi password yang benar
        cy.get('#login-button').click(); //klik tombol login dengan username dan password yang benar

        //assertion
        cy.get('.app_logo').should('be.visible'); // memastikan elemen logo aplikasi terlihat
        cy.get('.product_label').should('be.visible'); // memastikan elemen label produk terlihat
        cy.get('.product_label').should('contain', 'Products'); // memastikan label produk berisi teks 'Products'
      });
})