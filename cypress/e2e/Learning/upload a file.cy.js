describe('Upload a File case',()=>{

    it('upload a file',()=>{

        cy.visit('https://lambdatest.com/selenium-playground/upload-file-demo')

        cy.get('#file').selectFile('file name')
    })
})