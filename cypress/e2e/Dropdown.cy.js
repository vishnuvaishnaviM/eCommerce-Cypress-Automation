


describe('test different dropdowns', ()=>{

    it('Drop down with select tag', ()=>{
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get("select#zcf_address_country").select('Italy').should('have.value','Italy')

    })
    it('Drop down without select tag', ()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click()
        cy.get('input.select2-search__field').type('Italy').type('{enter}')
        cy.get("#select2-billing_country-container").should('have.text','Italy')

    })

    it('Auto suggest dropdown', ()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.get('input#searchInput').type('Delhi')
        cy.get('.suggestion-title').contains('Delhi University').click({force:true})
    })


    it('Dynamic dropdown',()=>{
        cy.visit('https://www.google.com/')
        cy.get('#APjFqb').type('Cypress automation')
        cy.wait(3000)
        cy.get('div.wM6W7d>span').should('have.length',13)
        cy.get('div.wM6W7d>span').each(($el,index,$list)=>{
            if($el.text()=='cypress automation'){
                cy.wrap($el).click()
            }
        })
        cy.get('#APjFqb').should('have.value','cypress automation')
    })

})