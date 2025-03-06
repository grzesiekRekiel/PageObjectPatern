export class HomePage {
    openNavButton() {
        cy.get('#open-navigation-menu-mobile').click();
        return this;
    };
    clickLogout() {
        cy.get('.next-bve2vl').contains('Log out').scrollIntoView().should('be.visible').click();
        return this;
    };
    logOut() {
        this.openNavButton().clickLogout();
        return this;
    }
}