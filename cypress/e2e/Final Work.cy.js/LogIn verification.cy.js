describe('Login verification',()=>{

    it('Login test Negative ',function(){

        cy.visit('https://paragon-prep.getadigital.com/')

        cy.get('.profileUrl--PZypDAj').click()

        cy.contains('Login').should('have.text','Login').and('be.visible')

        cy.contains('Login intro text').should('have.text','Login intro text').and('be.visible')

        cy.contains('Forgot password?').should('have.text','Forgot password?').and('be.visible')

        cy.get('.ant-checkbox-input').should('have.class','ant-checkbox-input')
    
        
              cy.get('[name="userName"]').type('test@gmail.com')
              
              cy.get('[name="password"]').type('123123')


        cy.get('form > .button--vWQlNk5').should('have.text','Login').and('be.visible').click()
        cy.log('Button clicked succesfully')
        cy.get('.errorsList--TFSkhjS > li').should('have.text','Login error')

        //User should be not able to log in


    })
})