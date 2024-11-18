describe('hooks and tags',()=>{


    before(()=>{
        cy.log("-----launch app-----")
    })

    beforeEach(()=>{
        cy.log("-----login------")
    })

    after(()=>{
        cy.log("-----close app------")
    })

    afterEach(()=>{
        cy.log("-----logout-----")
    })

    it('search',()=>{
        cy.log('click on the search box')
    })

    it('adv search',()=>{
        cy.log("click on the adv search button")
    })

    it('type in the search box',()=>{
        cy.log("-----type in the search box-----")
    })


    //tags
    // it.skip('additional features',()=>{
    //     cy.log("add extra features here...");
    // })

    // it.only('run a specific testcase',()=>{
    //     cy.log("enable this test case to run it alone")
    // })
})