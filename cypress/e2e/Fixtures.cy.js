describe('handling fixtures and data driven test cases using json',()=>{
    
    //approach1 - direct access
    it('handling json data',()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.fixture('signin').then((data)=>{
            cy.get("a[title='Log in to your customer account']").click()
            cy.get("#email").type(data.username)
            cy.get("#passwd").type(data.password)
            cy.get("button[id='SubmitLogin'] span").click()
            cy.title().should('eq',data.expected)
        })
    })

    //approach2 - accessing data through hooks 
    //hook 
    let userdata;
    before(()=>{
        cy.fixture('signin').then((data)=>{
            userdata=data;
        })
    })
    
    it('handling data using hook ',()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get("a[title='Log in to your customer account']").click()
        cy.get("#email").type(userdata.username)
        cy.get("#passwd").type(userdata.password)
        cy.get("button[id='SubmitLogin'] span").click()
        cy.title().should('eq',userdata.expected)
    
    })

    //for multiple data from json file - positive and negative scenarios
    it('handling multiple data',()=>{
        cy.fixture('signin2').then((data)=>{
            cy.visit("http://www.automationpractice.pl/index.php")
            cy.get("a[title='Log in to your customer account']").click()
            data.forEach((element) => {
                cy.get("#email").type(element.username)
                cy.get("#passwd").type(element.password)
                cy.get("button[id='SubmitLogin'] span").click()
                if(element.username=="demoname@gmail.com" && element.password=="demo12"){
                    cy.title().should('eq',element.expected)
                    //if login successful then click on logout for next testcase
                    cy.get("a[title='Log me out']").click()
                    cy.get("#email").should('be.visible')
                }else{
                    cy.get("div[class='alert alert-danger'] p")
                    .should('have.text',element.expected)
                }
              
            });
        })
    })


})