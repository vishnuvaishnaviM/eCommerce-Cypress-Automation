class login2{

    signinElement = "a[title='Log in to your customer account']"
    usernameElement = "#email"
    passwordElement = "#passwd"
    submitElement = "button[id='SubmitLogin'] span"
    verifyLoginElement = 'My account - My Shop'

    sigin(){
        cy.get(this.signinElement).click()
    }
    userName(userName){
        cy.get(this.usernameElement).type(userName)
    }

    password(password){
        cy.get(this.passwordElement).type(password)
    }


    login(){
        cy.get(this.submitElement).click()
    }

    verifylogin(){
        cy.title().should('eq', this.verifyLoginElement)
    }
}

export default login2;