describe("custom commands",()=>{

    it('creating new custom command',()=>{

        cy.visit("http://www.automationpractice.pl/index.php",{failOnStatusCode: false})

        //direct approach - just by using the css selector directly
        // cy.get("div[id='content'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) h4:nth-child(1) a:nth-child(1)").click()
        cy.clickLink("DRESSES")
        cy.get(".cat-name").contains("Dresses")
    })

    it('overwriting existing custom command',()=>{
        cy.visit("http://www.automationpractice.pl/index.php",{failOnStatusCode: false})
        cy.clickLink("dresses")
        cy.get(".cat-name").contains("Dresses")
    })


    it('login',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.login("Admin","admin123")
        cy.title().should('eq','OrangeHRM')
    })
})