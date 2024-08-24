Feature: Authentication 

  Background: 
    Given I am on the login page

  Scenario: User can log in with valid email and password
    When I enter a valid email "cucumber@test.com" 
    And I enter a valid password "Password123"
    And I click the login button
    Then I should be redirected to the user dashboard.