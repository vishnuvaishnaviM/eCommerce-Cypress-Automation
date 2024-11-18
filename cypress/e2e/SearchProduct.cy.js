describe('search a product', ()=>{
    //css locators
    it('validating the search functionality', ()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        // using css selector id to search the searchbox
        cy.get("#search_query_top").type("T-shirts")
        //using css selector attribute to click on the search button
        cy.get("[name='submit_search'] ").click()
        //using css selector class to validate the result - assertion
        cy.get(".lighter").contains("T-shirts")


    })

})