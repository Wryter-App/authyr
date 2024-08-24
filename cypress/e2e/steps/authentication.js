import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the login page", () => {
  cy.visit("http://localhost:5173/login");
});

When("I enter an email {string}", (email) => {
  cy.getByData("email-input").type(email);
});

When("I enter a password {string}", (password) => {
  cy.getByData("password-input").type(password);
});

Then("I click the login button", () => {
  cy.getByData("login-button").click();
});

Then("I should be redirected to the user dashboard", () => {
  cy.get('.welcome-user').should('be.visible')
});
