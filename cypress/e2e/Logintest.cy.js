it ('Login Test 1',function(){


    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin{Enter}')

    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123{Enter}')

    cy.get('.oxd-userdropdown-name').click()

    cy.get(':nth-child(1) > .oxd-userdropdown-link').click()

    })

    it ('Login Test 2',function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin{Enter}')
    
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123{Enter}')
    
        cy.get('.oxd-userdropdown-name').click()

        cy.contains('Admin').click()

        cy.get(':nth-child(2) > .oxd-input').type('blake.osinski{Enter}')

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click ()

        cy.contains('Search').click()
        


    
        })