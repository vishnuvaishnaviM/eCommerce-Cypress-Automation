describe('Sample spec', () => {
  it('Verify title', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.title().should('eq','OrangeHRM')
  })


  //negative testcase
  it('Verify title - negative testcase', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.title().should('eq','OrangeHRMfail')
  })
})