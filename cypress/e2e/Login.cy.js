import login from '../PageObjects/loginPage.js'
import login2 from '../PageObjects/loginPage2.js'

describe('login functionality',()=>{
    it('Login test - general approach',()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get("a[title='Log in to your customer account']").click()
        cy.get("#email").type("demoname@gmail.com")
        cy.get("#passwd").type("demo12")
        cy.get("button[id='SubmitLogin'] span").click()
        cy.title().should('eq','My account - My Shop')
    })


    it("login page - POM",()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        const loginObj = new login();
        loginObj.sigin();
        loginObj.userName("demoname@gmail.com")
        loginObj.password("demo12")
        loginObj.login()
        loginObj.verifylogin();
    })

    it("login page - POM",()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        const loginObj = new login2();
        loginObj.sigin();
        loginObj.userName("demoname@gmail.com")
        loginObj.password("demo12")
        loginObj.login()
        loginObj.verifylogin();
    })
})