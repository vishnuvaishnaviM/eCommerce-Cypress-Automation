describe('Implicit and explicit assertions', ()=>{

    it('implicit assertions', ()=>{
        cy.visit("http://www.automationpractice.pl/index.php")


        //should    and
        cy.url().should('eq','http://www.automationpractice.pl/index.php')
        cy.url().should('contain','automationpractice')
        cy.url().should('include','automationpractice')

        cy.title().should('eq','My Shop')
        .should('contain','Shop')
        .should('include','Shop')

        cy.title().should('eq','My Shop')
        .should('not.contain','@@#$')
        .should('not.include','123')       

        //check if logo is visible
        cy.xpath("//img[@class='logo img-responsive']").should('be.visible')
        //another approach
        cy.xpath("//img[@class='logo img-responsive']").should('exist')

        //check if the correct text is provided in the search box
        cy.get("#search_query_top").type("T-shirts")

        cy.get("#search_query_top").should('have.value','T-shirts') //check
    })


    it('explicit assertions', ()=>{
        cy.visit("https://artoftesting.com/samplesiteforselenium")
        
        //radio button

        //check the visibility of the radio button
        cy.get("input#female").should('be.visible')
        cy.get("input#male").should('be.visible')
        //select the radio button
        cy.get("input#female").check().should('be.checked')
        //cy.get("input#female").check() - to click on radio button
        //should('be.checked') - assertion to check if radio button is selected
        cy.get("input#male").should('not.be.checked') //only one option should be selected in radio buttons

        //check box
        cy.get("input.Automation").should('be.visible')
        cy.get("input.Performance").should('be.visible')
        cy.get("input.Automation").check().should('be.checked')
        cy.get("input.Performance").should('not.be.checked')
        cy.get("input.Performance").check().should('be.checked')
        cy.get("input.Performance").uncheck().should('not.be.checked')

    })


    
    // it('click on all checkboxes', ()=>{
    //       //select all the checkboxes
    //       cy.visit("http://www.automationpractice.pl/index.php")
    //       cy.get("li.sfHoverForce").click()
    //       cy.get("//ul[@id='ul_layered_category_0']//li//input").check().should('is.checked')

    //       //select first checkbox
    //       cy.visit("http://www.automationpractice.pl/index.php")
    //       cy.get("//ul[@id='ul_layered_category_0']//li//input").first().check().should('is.checked')

    //       //select first checkbox from last
    //       cy.get("//ul[@id='ul_layered_category_0']//li//input").last().check().should('is.checked')
    // })

})