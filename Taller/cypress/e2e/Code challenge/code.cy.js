it("Code challenge",()=>{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('#radio-btn-example legend')
        .should('have.text', 'Radio Button Example')
})

it("select dropdown",()=>{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('#dropdown-class-example').select('option2')
    cy.get('#dropdown-class-example').select('option3')
})

it("click boton signup",()=>{
  cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.contains('Signup').should('be.visible').click()
    cy.get('header button.btn-primary').eq(3).should('be.visible').click()
})

it("click boton practice",()=>{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.contains('Practice').should('be.visible').click()
    cy.get('header button.btn-primary').eq(1).should('be.visible').click()
})

it("click boton login",()=>{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.contains('Login').should('be.visible').click()
    cy.get('header button.btn-primary').eq(2).should('be.visible').click()
})

it("click get and contains", () =>{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('header button').contains('Home')
    cy.get('header button').contains('Login').click()
})

it("Type name", () =>{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('#name').type('Luis Maltez')
    cy.get('#confirmbtn').should('be.visible').click()
})