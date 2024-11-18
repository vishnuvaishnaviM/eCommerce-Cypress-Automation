describe("browser navigation",()=>{

    it('navigate commands',()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.title().should('eq','My Shop')
        cy.get("a[title='Log in to your customer account']").click()
        cy.title().should('eq','Login - My Shop')


        cy.go('back')
        cy.title().should('eq','My Shop')

        cy.go('forward')
        cy.title().should('eq','Login - My Shop')

        cy.go(-1)
        cy.title().should('eq','My Shop')

        cy.go(1)
        cy.title().should('eq','Login - My Shop')

        cy.reload()
    })
})