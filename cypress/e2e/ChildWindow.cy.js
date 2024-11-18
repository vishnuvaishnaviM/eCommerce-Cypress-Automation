describe('Handling child windows', ()=>{


    it('approach1',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get("div[class='example'] h3").should('have.contain','Opening a new window')
        cy.get('.example>a').invoke('removeAttr','target').click()

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(2000)
        cy.go('back')
        cy.url().should('include','https://the-internet.herokuapp.com/windows')
    })


    //approach2 - after opening parent link get the child link and use cy.visit for child link
    it('approach2',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get(".example>a").then((e)=>{
            let url = e.prop('href');
            cy.visit(url);
        })
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(2000)
        cy.go('back')
        cy.url().should('include','https://the-internet.herokuapp.com/windows')
    
    })
})