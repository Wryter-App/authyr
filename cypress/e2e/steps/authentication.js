import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am on the login page", () => {
  cy.visit("http://localhost:5173/login");
});

When("I enter a valid email {string}", (email) => {
  cy.getByData("email-input").type(email);
});

When("I ender a valid password {string}", (password) => {
  cy.getByData("password").type(password);
});

Then("I click the login button", () => {
  cy.getByData("login-button").click();
});

Then("I should be redirected to the user dashboard", () => {
  cy.getByData("user-dash").should("be.visible");
});
