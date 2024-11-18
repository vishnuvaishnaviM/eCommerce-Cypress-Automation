describe('capture screenshot and video of failed tests',()=>{

    it('to capture screenshot of specific page or element',()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.screenshot("shop_homepage") //takes screenshot of fullpage
        cy.get("img[alt='My Shop']").screenshot("orangehrm_homeicon")
    })


    //negative test case
    it('automatic screenshot and video for failed testcase',()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get(".blockbestsellers[data-toggle='tab']").should('have.text','Best sellers')
    })
})