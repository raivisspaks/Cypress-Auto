describe('Zero Delay Timing',()=>{

    it('zero delay',()=>{

        cy.visit('https://www.lambdatest.com/selenium-playground/simple-form-demo')
        cy.get('#user-message').type('Test automation via cypress',{delay:0})
    })
})