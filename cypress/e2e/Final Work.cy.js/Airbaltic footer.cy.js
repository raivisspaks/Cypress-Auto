describe('Footer social media icons',()=>{

    it('Social media icons ',()=>{

        cy.visit('https://www.airbaltic.com/en-LV/index')

        cy.scrollTo('bottom')

        cy.get('.footer-social a')
        .should('have.length', 6)
        .and('be.visible')
        
    })
})
