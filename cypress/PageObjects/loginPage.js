class login{

    sigin(){
        cy.get("a[title='Log in to your customer account']").click()
    }
    userName(userName){
        cy.get("#email").type(userName)
    }

    password(password){
        cy.get("#passwd").type(password)
    }


    login(){
        cy.get("button[id='SubmitLogin'] span").click()
    }

    verifylogin(){
        cy.title().should('eq','My account - My Shop')
    }
}

export default login;