describe('Locators' , ()=> {
     it('locators' , () => {

    cy.visit('https://rahulshettyacademy.com/dropdownsPractise/')   
    cy.get('#ctl00_mainContent_ddl_originStation1_CTXT').click()
    cy.get('.paxinfo').click()
    cy.xpath('//input[@name="ctl00$mainContent$view_date1"]').click()

    
   
    


   

        



        

   })

})