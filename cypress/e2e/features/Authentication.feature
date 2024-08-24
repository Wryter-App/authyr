Feature: Authentication 

  Background: 
    Given I am on the login page

   Scenario: Invalid login credentials 
    When I enter an email "test@test.com" 
    And I enter a password "Password" 
    And I click the login button 
    Then I should receive an error message

  Scenario: User can log in with valid email and password
    When I enter an email "test@test.com" 
    And I enter a password "Password123"
    And I click the login button
    Then I should be redirected to the user dashboard

 