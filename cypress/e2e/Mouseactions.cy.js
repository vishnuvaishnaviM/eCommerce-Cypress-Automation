require('@4tw/cypress-drag-drop')
describe('mouse actions',()=>{
    it('Mouse hover2',()=>{
        cy.visit("https://the-internet.herokuapp.com/hovers")
        cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > img:nth-child(1)")
            .trigger('mouseover')
        cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > h5:nth-child(1)")
        .should("have.text","name: user1")
        

    })

    it('righ click',()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        // cy.get(".context-menu-one.btn.btn-neutral").rightclick() //approach1
        cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu") //approach2
        
        cy.get(".context-menu-icon-copy > span").should("be.visible")
    })

    it('double click',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("button[ondblclick='myFunction1()']").trigger('dblclick');//approach1
        // cy.get("button[ondblclick='myFunction1()']").dblclick();//approach2
        cy.get("#field2").should("have.value","Hello World!")
        
    })

    it('drag and drop',()=>{
        //install package - npm install --save-dev @4tw/cypress-drag-drop
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get("#box6").drag("#box106",{force:true})

    })

    it('scrolling page',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("div[id='HTML17'] h2[class='title']").scrollIntoView({duration:3000})
        cy.get("div[id='HTML17'] h2[class='title']").should('have.text','Scrolling DropDown')

    })
})