@parentSuite:EspoCRM_E2E_Tests @suite:Authentication_Module @severity:critical
Feature: Authentication Module
  As a user
  I want to log in to EspoCRM
  So that I can access my account

  

  @TC001
  Scenario: TC001: Verify successful login
    Given I am on the login page
    When I enter username and password
    And I click the login button
    Then I should see the dashboard

  @TC002
  Scenario Outline: TC002: Verify login failure (Invalid Credentials) - User: <username>
    Given I am on the login page
    When I enter invalid "<username>" and "<password>"
    And I click the login button
    Then I should see the error message  
    Examples:
    | username  |  password   |
    | invalid   |  rt2345     | 
    | rweet     |  serert1234 |

  @TC003
  Scenario: TC003: Verify login failure (Empty Fields)
    Given I am on the login page
    When I leave username and password empty
    And I click the login button
    Then I should see the error text message

  @TC004
  Scenario: TC004: Verify logout functionality
    Given I am on the dashboard
    When I click the logout button
    Then I should be redirected to the login page
