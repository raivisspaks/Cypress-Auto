
describe('Automation usin Cypress ||Fixtures',()=>{

    let data //Initialized the variable data

    before(()=>{

        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
        cy.fixture('login').then((value)=>{  //Load the data from the login.json inside the fixtures folder
            data = value
        })
    
})
     // Start the test case
     it('Login into the application using fixture data',()=>{

        cy.get('input[name="email"]').type(data.email) // enter the email

        cy.get('input[name="password"]').type(data.password) //Enter the password

        cy.get('input[type="submit"]').click()  // click on Submit button
     })

     //End of the Test case
})     