beforeEach(function(){
    cy.visit('https://www.airbaltic.com/en-GB/index')
    cy.get("[class='btn accept btn-cookie']").click()



    cy.log('---Before the very 1st test case---')
})

describe('Airbaltic homepage test',()=>{

    it('Homepage test case',()=>{

        //cy.visit('https://www.airbaltic.com/en-GB/index')
        cy.url().should('eq','https://www.airbaltic.com/en-GB/index')
        .and('include','airbaltic')
        cy.log('Webpage confirmed successfully')
        
    })

    it('Title test case Positive',()=>{   //Positive test case

    
        cy.title().should('eq','Cheap flights to Baltics, Europe & Middle East | airBaltic')
        .and('contain','flights to Baltics')
    
    })

    it('Title test case Negative',()=>{   //Negative test case

        
        cy.title().should('eq','Cheap flights to Balticcs, Europe & Middle East | airBaltic')
        .and('contain','flights to Baltics')

        })

    it('Logo Test Case Page Reload',()=>{

        
        cy.get("img[alt='airBaltic logo']").should('be.visible')
        cy.get("img[alt='airBaltic logo']").click()
        cy.log('Logo clicked successfully and page Refreshed')
        
        
    })

    it('Select country and Language test case',()=>{

       
        cy.get('.lang').click()
        cy.get('.location-form > .countries > .dropdown-field').click()
        cy.get('.flag-gb').should('contain','United Kingdom')
        cy.get('.languages > .dropdown-list a').should('have.length',7)  

        cy.get('.languages > .dropdown-list > :nth-child(1) > a').should('contain','English')


        
    })

    it.only('Read More Tab opens in New Window',()=>{

        

        cy.get('.sub-header > :nth-child(2) > [href="/en/destinations"]').invoke('removeAttr','target').click()

        cy.url().should('include','https://www.airbaltic.com/en-LV/destinations?map=closed') 

        cy.go('back')  

    })
    
    it(' From Flight search box test',()=>{

        

        cy.get('.blue-border > .input-container').type('{Enter}')

        cy.get("[placeholder='Choose your origin']").type('usa')

        cy.get('.dropdown-item div').each(($el,index,$list) => {  
            
            if($el.text() =='New York (EWR)')
            {
            cy.wrap($el).click() 
            }
        })
        cy.contains('From EWR New York').should('be.visible')
        cy.log('From EWR New York is selected and visible')
    })

    it('Destination Flight search box test',()=>{

        

        cy.get('.destin > .input-container').type('{Enter}')

        cy.get('.dropdown-item')


    })

})