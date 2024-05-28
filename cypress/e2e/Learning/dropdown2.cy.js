describe('Dropdown Test Suite',()=>{

    it('Dropdown with select',()=>{

      cy.visit('https://www.orangehrm.com/en/30-day-free-trial/')
      
      cy.get('#Form_getForm_Country').select('Ireland',{force:true}).should('have.value','Ireland')  //to force click if tag have (select)

    })

    it('Dropdown without select',()=>{

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Ireland').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text','Ireland')
    })

    it('Auto suggest Dropdown',()=>{

        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestion-title').contains('Delhi University').click()
    })

    it('Dynamic dropdown',()=>{

        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestion-title').contains('Delhi University').click()
    })

    it('Dynamic dropdown',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('us')
        cy.get('.ui-menu-item-wrapper').contains('Mauritius').click()
    })

    it.only('Dynamic dropdown',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('can')
        cy.get('.ui-menu-item div').each(($el,index,$list) => {  //All (ui-menu-item)-is selector from group (div)- is child menu
            
            if($el.text() =='Canada')
            {
            cy.wrap($el).click() 
            }
        })
        cy.get('#autocomplete').should('have.value', 'Canada')                
    })
})       