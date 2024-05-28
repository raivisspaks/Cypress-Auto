describe('My First test', () =>{


    it('Verify title Postitive',() =>{

        cy.visit('https://www.888sport.com/football/')

        cy.title().should('eq','Football Betting & Football Odds › 888sport') //to check page title 

        })

    it('Verifiy title Negative',() =>{
        cy.visit('https://www.888sport.com/football/')
        
        cy.title().should('eq','Tennis Betting & Football Odds › 888sport')
    })
})