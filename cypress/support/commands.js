// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />

/// <reference types="cypress-xpath" />

import '@4tw/cypress-drag-drop';


Cypress.Commands.add('getIframe',(iframe)=>{
    return cy.get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
})

//creating custom command to click on a link for a given label
Cypress.Commands.add('clickLink',(label)=>{
    cy.get('a').contains(label).click({force:true});
})

//overwriting existing contains() to support for case insensitive, by default contains() treat uppercase and lowercase differently
// Custom command overwriting: contains() command
Cypress.Commands.overwriteQuery(
    "contains",
    function (contains, filter, text, userOptions = {}) {
      // This is parameter resolution from Cypress v12.7.0 source
      if (Cypress._.isRegExp(text)) {
        // .contains(filter, text)
        // Do nothing
      } else if (Cypress._.isObject(text)) {
        // .contains(text, userOptions)
        userOptions = text
        text = filter
        filter = ''
      } else if (Cypress._.isUndefined(text)) {
        // .contains(text)
        text = filter
        filter = ''
      }
      userOptions.matchCase = false;
      let contains0 = contains.bind(this)    // this line fixes the error
      return contains0(filter, text, userOptions)
    }
  )
  



//login custom command
Cypress.Commands.add('login',(email,password)=>{
    cy.get("input[placeholder='Username']").type(email)
    cy.get("input[placeholder='Password']").type(password)
    cy.get("button[type='submit']").click()
})


  
  