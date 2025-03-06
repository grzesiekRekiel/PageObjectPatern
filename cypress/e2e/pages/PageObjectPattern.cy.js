import { Login } from "./Login";
import { HomePage } from "./HomePage";

const LoginPage = new Login();
const homePage = new HomePage();
describe('Page Object Pattern', () => {
    it('Login Page Test', () => {
        LoginPage.logIn();
        LoginPage.dateInput();
        LoginPage.click();
        homePage.logOut()

    });
})