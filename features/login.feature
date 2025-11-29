Feature: Authentication
  As a user
  I want to log in to EspoCRM
  So that I can access my account

  Scenario: Successful Login
    Given I am on the login page
    When I enter username and password
    And I click the login button
    Then I should see the dashboard
