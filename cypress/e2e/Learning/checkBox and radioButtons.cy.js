describe('UI Elements',()=>{

    it('Checking RadioButton',()=>{
       
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[value="radio1"]').should('be.visible')   //('input[value="radio1"]')  CSS selector
        cy.get('input[value="radio2"]').should('be.visible')   
        cy.get('input[value="radio3"]').should('be.visible')

        cy.get('input[value="radio1"]').check().should('be.checked')  // if type=checkbox , then can use check command
        cy.get('input[value="radio2"]').should('not.be.checked')
        cy.get('input[value="radio3"]').should('not.be.checked')
    })

    it('Checking boxes',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').should('be.visible')
        cy.get('#checkBoxOption2').should('be.visible')
        cy.get('#checkBoxOption3').should('be.visible')

        cy.get('#checkBoxOption1').check().should('be.checked')
        cy.get('#checkBoxOption2').check().should('be.checked')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        cy.get('input[type="checkbox"]').first().check()
        cy.get('input[type="checkbox"]').last().check()

        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option1','option2']) //to check multiple boxes in one command

    })



})