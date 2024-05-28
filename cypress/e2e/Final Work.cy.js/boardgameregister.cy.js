describe('Boardgame register page',()=>{

    it('Should show validation errors when leaving all fields blank',()=>{

        cy.visit('https://boardgamegeek.com/join')
        cy.get("[class='btn btn-lg btn-info tw-mt-5 tw-block tw-w-full']").click()

        cy.get('#usernameHelp > [role="alert"]').should('contain','Please pick a username.')
        .and('be.visible')

        cy.get(':nth-child(2) > .feedback-invalid').should('contain','Please enter a valid email address.')
        .and('be.visible')

        cy.get(':nth-child(3) > .feedback-invalid > [role="alert"]').should('contain','Please pick a password.')
        .and('be.visible')
    })
})