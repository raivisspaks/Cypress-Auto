describe('Test case for Logo and page title verification',()=>{
    
    it('Logo should be clickable and visible',()=>{

        cy.visit('https://paragon-prep.getadigital.com/')

        cy.get('.img--IgS6R6I').click()
           cy.log('Logo should be clicked successfully')

          
           
    })
  
    it('Page title verification Positive',()=>{

        cy.visit('https://paragon-prep.getadigital.com/paragon/bags2/backpacks2_43/')
        
        cy.title().should('eq','Backpacks | Paragon')

        cy.log('Title verification checked successfully')
  })

    it('Page title verification Negative',()=>{

        cy.visit('https://paragon-prep.getadigital.com/paragon/bags2/backpacks2_43/')

        cy.title().should('eq','Socks | Paragon')
    })
})