describe('Assertions demo',()=>{

    it('Implicit assertions',()=>{   //it.skip <--- will skip this part of case

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','orangehrmlive')  //line Nr6
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //to confirm line Nr6
        cy.url().should('contain','orangehrmlive')  //same way as Nr6

        cy.url().should('include','orangehrmlive')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrmlive')
        
        //or
        cy.url().should('include','orangehrmlive')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrmlive')
        .and('not.contain','green')

        cy.get("img[alt='company-branding']").should('be.visible') //check if logo visible

        cy.xpath('//a').should('have.length',5) // check web links with anchors a

        cy.xpath('//button').should('have.length',1) // check button

        cy.get("input[placeholder='Username']").type('Admin')

        cy.get("input[placeholder='Username']").should('have.value','Admin')  //to check value for Admin

    })  

    it('Explicit assertions',()=>{   //it.only  <<--- Runs only this case

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') 
        
        cy.get("input[placeholder='Username']").type('Admin')

        cy.get("input[placeholder='Password']").type('admin123')

        cy.get("button[type='submit']").click()

        let expectedName = 'Test Namemanda user'  //what name i was expecting
        cy.get('.oxd-userdropdown-name').then( (x)=>{   //select from all available this name

            let actualName =x.text()

            //Assertion in BDD Aproach

            expect(actualName).to.equal(expectedName)
            //expect(actualName).to.not.equal(expectedName)

            //Assertion in TDD Approach

            assert.equal(actualName,expectedName)

            //assert.notequal(actualName,expectedName)






        })






   
   
    })

        
})