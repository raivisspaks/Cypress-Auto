describe('ViewPort test',()=>{

    it('Viewport device',()=>{
     
        cy.viewport('iphone-3')  //(1024,768) can be custom resolution
        cy.visit('https://www.amazon.co.uk/')

    })
     
    it('Viewport landscape mode',()=>{
        
    })
    cy.viewport('iphone-3','landscape')
    cy.visit('https://www.amazon.co.uk/')

        
})