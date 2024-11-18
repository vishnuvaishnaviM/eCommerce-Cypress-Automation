// reference - https://docs.cypress.io/api/cypress-api/catalog-of-events 

describe('Alerts', ()=>{

    // javascript alert - have some text and ok button
    it('Javascript alert', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click()
        //assertion to validate text on alert
        cy.on('window:alert',(t)=>{
            expect(t).to.contains("I am a JS Alert");
        })
        //validate msg on home screen after closing alert( cypress will automatically close the alert)
        cy.get("#result").should('have.text', 'You successfully clicked an alert')
        
    })

    //javascript confirm alert - have some text with ok and cancel button

    it('JS confirm alert - ok', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');
        })
//by default js clicks on the OK button
        cy.get('#result').should('have.text',"You clicked: Ok")
    })
    

    it('JS confirm alert - ok', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')
        })
        //explicitly click on the cancel button
        cy.on("window:confirm",()=>false);
        cy.get('#result').should('have.text',"You clicked: Cancel")
    })
    //javascript prompt alert: have some text with text box for user along with ok

    it('javascript prompt alert- ok ', ()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        //pass the text to the prompt before clicking on the alert
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome');
        })
        cy.get('button[onclick="jsPrompt()"]').click()
        //cypress will automatically click on ok
        cy.get("#result").should('have.text','You entered: welcome')
        
    })

    it('javascript prompt alert- cancel ', ()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        //pass the text to the prompt before clicking on the alert
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome cancel');
        })
        cy.get('button[onclick="jsPrompt()"]').click()
        //explicitly click on the cancel button
        cy.on("window:prompt",()=>false);
        cy.get("#result").should('have.text','You entered: welcome cancel')
        
    })
    // authenticator alert
    //approach1
    it('Authentication alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:{
            username:"admin",
            password:"admin"
        }})

        cy.get("div[class='example'] p").should('have.contain','Congratulations')
    })
    //approach2
    it('Authentication  -approach2',()=>{
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')

        cy.get("div[class='example'] p").should('have.contain','Congratulations')
    })


})