import 'cypress-iframe';
describe('handling frames',()=>{


    //approach1
    it('approach1 to handle frames - handling single frame',()=>{
        cy.visit('https://ui.vision/demo/webtest/frames/')
        let iframe = cy.get("frame[src='frame_1.html']")
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)
        // .find("input[@name='mytext1']")
        // .type("welcome")
    })


    //approach2
    it('approach2 - handling multiple frames using custom command defined in commands.js',()=>{
        cy.visit('https://ui.vision/demo/webtest/frames/')
        cy.getIframe("frame[src='frame_1.html']")
        // .find("input[@name='mytext1']")
        // .type("welcome")
    })


    //approach3 - cypress iframe plugin
    it('approach3 - using cypress iframe plugin',()=>{
        cy.visit("https://ui.vision/demo/webtest/frames/")
        cy.frameLoaded("frame[src='frame_1.html']") //load the frame
        cy.iframe("frame[src='frame_1.html']") //interact with iframe
            // .find("input[@name='mytext1']")
            // .type("welcome")
    })
})