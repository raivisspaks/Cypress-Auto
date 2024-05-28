describe('Alerts', ()=>{

    //Javascript Alert: Automatically close. Confirm text
    it('JS Alerts',()=>{
        
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click()

        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert')

        })
        cy.get('#result').should('have.text','You successfully clicked an alert')

    })
    
    //OK and Cancel button case

     it('JS Confirm Alert - ok'),()=>{
         cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
         cy.get("button[onclick='jsAlert()']").click()

         cy.on('windows:alert',(t)=>{
            expect(t).to.contains('I am a JS Confirm')
         })
         
         cy.on('windows:confirm',()=>false)  //Cancel button
         cy.get('#result').should('have.text','You clicked: Cancel')
     }
    
    it('JS Promp Alert',()=>{
         
         cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

         cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome')
        
         })
         cy.get("button[onclick='jsPrompt()']").click()

         cy.get('#result').should('have.text','You entered: welcome')
    })
    //Authenicated Alert

    it('Authenicated Alert',()=>{
        cy.visit('http://admin:admin@the-internet.herokuapp.com/basic_auth')  //where admin:admin means login and password

        cy.get("div[class='example'] h3").should('have.contain','Basic')
    })
})

            
                   