import Login from  "C:/Cypress/cypress/PageObjects/Login.js";
describe('POM', () =>{
    // General Approach
    it('LoginTest', ()=> {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[name='username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click();
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard')
    })
    //using POM approach
    it('LoginTest with POM', ()=> {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         const ln = new Login()
         ln.setUserName('Admin')
         ln.setPassword('admin123')
         //ln.forgotpassword()
         ln.clickSubmit();
         ln.verifyLogin();
    })
})