describe('Count products', ()=>{

    it('count total products dispalyed on the home page', ()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get(".blockbestsellers[data-toggle='tab']").click()

        //count total products using xpath locator
        cy.xpath("//ul[@id='blockbestsellers']//li").should('have.length',6)
    })

    it('count total products dispalyed on the home page using chained xpath', ()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get(".blockbestsellers[data-toggle='tab']").click()

        //count total products using xpath locator
        cy.xpath("//ul[@id='blockbestsellers']").xpath("./li").should('have.length',6)
    })

})