import LoginPage from '../PageObjects/LoginPage'
/// <reference types ="Cypress"/>

describe('Login Page Tests', () => 
{

    const lp = new LoginPage()

    beforeEach(() => {
        lp.visit()
    })
    
    it('verify login page elements are present', () => 
    {
        
        lp.verifyLoginPageElements();

    })

    it('verify create new account form elements are present', () =>
    {
        lp.elements.createNewAccoutButton().click();
        lp.verifyCreateNewAccoutFormElements();
    })

    it('verify password is hidden', () => 
    {
        
        lp.elements.passwordInput().should('have.attr', 'type', 'password')

    })

    it('verify password is shown', () =>
    {
        lp.elements.passwordInput().type('dummypassword');
        lp.elements.showPasswordButton().click();
        lp.elements.passwordInput().should('have.attr', 'type', 'text');
    })

    it ('verify error displayed when leaving login and password empty', () =>
    {
        lp.elements.loginButton().click();
        lp.elements.incorrectLoginOrPasswordError();
    })

    it ('verify forgot password flow when clicking cancel', () =>
    {
        lp.elements.forgotPasswordButton().click();
        lp.elements.cancelButton().click();
        cy.url().should('eq', 'https://www.facebook.com/login.php');
    })

    it ('forgot flow shows error when pressing "search" with an empty field', () =>
    {
        lp.elements.forgotPasswordButton().click();
        lp.elements.searchButton().click();
        lp.elements.pleaseFillFieldsError();
    })

    //Couldn't find a unique locator for each error, so using text to verify (which depends on locales)
    it ('verify create new account errors', () =>
    {
        lp.elements.createNewAccoutButton().click();
        lp.elements.SignUpButton().click();
        
        lp.elements.firstNameInput().click()
        cy.get('._5633').should('include.text', 'What’s your name?');

        lp.elements.lastNameInput().click();
        cy.get('._5633').should('include.text', 'What’s your name?');

        lp.elements.registerEmailInput().click();
        cy.get('._5633').should('include.text', 'You\'\ll use this when you log in and if you ever need to reset your password.');

        lp.elements.registerPasswordInput().click();
        cy.get('._5633').should('include.text', 'Enter a combination of at least six numbers, letters and punctuation marks (like ! and &).');
        
        lp.elements.birthdayDayInput().select('1');
        cy.get('._5633').should('include.text', 'It looks like you entered the wrong info. Please be sure to use your real birthday.')
    })
  })