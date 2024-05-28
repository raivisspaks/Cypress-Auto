before(function(){
    cy.log('---Before the very 1st test case---')
})

beforeEach(function(){
    cy.log('---Before each test case---')
})

afterEach(function(){
    cy.log('---Before each test case---')
})

after(function(){
    cy.log('---After last test case---')
})

describe('Test Suite 1',()=>{
    it('test Suite 1-TC1',()=>{
    cy.log('---This is my 1st Suite 1 TC---')
})
})

describe('Test Suite 1',()=>{
    it('test Suite 1-TC2',()=>{
    cy.log('---This is my 1st Suite 2 TC---')
})
})

describe('Test Suite 2',()=>{
    it('test Suite 2-TC1',()=>{
    cy.log('---This is my 2nd Suite 2 TC---')
})
})


    it('test Suite 2-TC2',()=>{
    cy.log('---This is my 2nd Suite 2 TC---')
})
