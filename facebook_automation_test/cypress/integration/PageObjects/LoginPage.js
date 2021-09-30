class LoginPage
{

    elements = {

        //login page
        
        emailOrPhoneInput: () => cy.get('[data-testid=royal_email]'),
        passwordInput: () => cy.get('[data-testid=royal_pass]'),
        showPasswordButton: () => cy.get('._9lsb'),
        loginButton: () => cy.get('[data-testid=royal_login_button]'),
        forgotPasswordButton: () => cy.get("._6ltj"),
        createNewAccoutButton: () => cy.get('[data-testid=open-registration-form-button]'),

        //forgot password flow
        emailOrPhoeSearchField: () => cy.get('#identify_email'),
        searchButton: () => cy.get("#did_submit"),
        cancelButton: () => cy.get('._9nq1').should('have.attr','href', '/login.php'),
        pleaseFillFieldsError: () => cy.get('.pam'),


        //error
        incorrectLoginOrPasswordError: () => cy.get('._9ay7'),

        //registration form
        firstNameInput: () => cy.get("[name='firstname']"), //name field
        lastNameInput: () => cy.get("[name='lastname']"),
        registerEmailInput: () => cy.get("[name='reg_email__']"),
        registerPasswordInput: () => cy.get("[name='reg_passwd__']"),
        birthdayDayInput: () => cy.get("[name='birthday_day']"),
        birthdayMonthInput: () => cy.get("[name='birthday_month']"),
        birthdayYearInput: () => cy.get("[name='birthday_year']"),

        genderFemale: () => cy.get("[name='sex'][value='1']"),
        genderMale: () => cy.get("[name='sex'][value='2']"),
        genderOther: () => cy.get("[name='sex'][value='-1']"),
        SignUpButton: () => cy.get("[name='websubmit']"),

        closeButton: () => cy.get("._8idr") //close button

    }

    visit() 
    {
        cy.setCookie('locale','en_US')
        cy.setCookie('datr','JD1IYbp6ZDubF_4LYuqliR2B')
        cy.visit('https://www.facebook.com/')
        cy.get('.fb_logo').click()
    }

    verifyLoginPageElements() 
    {
        this.elements.emailOrPhoneInput();
        this.elements.passwordInput();
        this.elements.loginButton();
        this.elements.forgotPasswordButton();
        this.elements.createNewAccoutButton();
    }

    verifyCreateNewAccoutFormElements()
    {
        this.elements.firstNameInput();
        this.elements.lastNameInput();
        this.elements.registerEmailInput();
        this.elements.registerPasswordInput();
        this.elements.birthdayDayInput();
        this.elements.birthdayMonthInput();
        this.elements.birthdayYearInput();
        this.elements.genderMale();
        this.elements.genderFemale();
        this.elements.genderOther();
        this.elements.SignUpButton();
        this.elements.closeButton();
    }

}
export default LoginPage