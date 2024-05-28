///<reference types="cypress"/>
it('Google search', ()=>{

    cy.visit('https://google.com')

    cy.get('#L2AGLb > .QS5gu').click ()
   
    cy.get('#APjFqb').type('Nba playoff bracket{Enter}')

    //cy.contains('Google Search').click()

    cy.contains('2024 NBA Playoffs').click()

    
}
)