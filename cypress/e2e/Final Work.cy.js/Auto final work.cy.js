describe('Final work in Automation',()=>{

    it('Final Work in Auto',()=>{
        cy.clearAllCookies()       // used command to clear cookies sometimes my test did not pass ,can't find the element

        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')  // Step 1
        
        cy.title().should('eq','XYZ Bank')   // Step 2
        .and('contain','XYZ')
        cy.log('Page Title verified successfully')
    
        cy.xpath('//button[@ng-click="customer()"]').click() // Step 3
        .should('contain','Customer Login') 

        cy.get('#userSelect').select('Harry Potter',{force:true}).should('have.value','2')  // Step 4
        .and('be.visible')
        
        
        cy.xpath('//button[@class="btn btn-default"]').click() // Step 5
        .should('contain','Login')

        let expectedName = 'Harry Potter'  // Step 6
        cy.get('.fontBig').then( (x)=>{  

            let actualName = x.text()

            expect(actualName).to.equal(expectedName)
            

        cy.contains('Currency').should('contain','Currency') // Step 7
    

        cy.get('.borderM > :nth-child(3) > :nth-child(3)').should('have.text','Dollar') // Step 7
        .and('be.visible')

        cy.xpath('//button[@ng-class="btnClass2"]').click() // Step 8
        cy.log('Clicked successfully')

        cy.get('input[placeholder="amount"]').type('15') // Step 9
        .should('have.value','15')

        cy.get('button[type="submit"]').click() // Step 10
        cy.get('.error').should('have.text','Deposit Successful') // Step 11
        .and('contain','Deposit')

        cy.xpath('//button[@ng-class="btnClass1"]').click() // Step 12
        cy.get('table[class="table table-bordered table-striped"]').contains('td','Amount') // Step 13
        .and('be.visible')

        cy.get('table[class="table table-bordered table-striped"] > tbody >tr> td:nth-child(2)').should('contain','15') // Step 13 sometimes can't find element when execute test
         .and('be.visible')

        cy.get('table[class="table table-bordered table-striped"] > thead >tr >td:nth-child(3)').contains('Transaction Type') // Step 14
        .should('be.visible')

        cy.get('table[class="table table-bordered table-striped"] > tbody >tr> td:nth-child(3)').contains('Credit') // Step 14
        .should('be.visible')

        cy.get('.fixedTopBox > [ng-click="back()"]').click() // Step 15
        cy.log('Back Button Clicked successfully')

        cy.xpath('//button[@ng-class="btnClass3"]').click() // Step 16
        cy.log ('Withdrawl Button clicked successfully')

        cy.get('[placeholder="amount"]').type('15') // Step 17
        cy.get('button[type="submit"]').click() // Step 18

        cy.xpath('//span[@class="error ng-binding"]').should('contain.text','Transaction successful') //Step 19
        .and('be.visible').and('contain','successful')

        cy.xpath('//button[@ng-class="btnClass1"]').click() // Step 20
        cy.get('table[class="table table-bordered table-striped"] > thead >tr >td:nth-child(3)').contains('Transaction Type') 
        .should('be.visible')

        cy.get('table[class="table table-bordered table-striped"] > tbody >tr[id="anchor1"] > td:nth-child(3)').contains('td,Debit') // Step 21 Unable to run this can't find element in cypress showing empty table
        .should('be.visible')

        

         

            
            
            
        })
        
    
    })

  

    
})