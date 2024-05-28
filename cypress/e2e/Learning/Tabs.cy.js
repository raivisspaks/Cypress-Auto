describe('Tabs new tab link in same window',()=>{

    it('Tabs',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')

        cy.get('.example>a').invoke('removeAttr','target').click()

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new') // to remove new page opening in new window

        cy.go('back')  // go back in browser


    })
})