export class Login {
    logIn() {
        cy.visit('https://www.edu.goit.global/account/login')
    };
    dateInput() {
        cy.get('#user_email').type('user888@gmail.com');
        cy.get('.next-11t95ij').type('1234567890');
    };
    click() {
        cy.get('.eckniwg2').click();
    };
    


}