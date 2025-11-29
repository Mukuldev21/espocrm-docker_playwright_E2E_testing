Feature: Authentication
  As a user
  I want to log in to EspoCRM
  So that I can access my account

  Scenario: Successful Login
    Given I am on the login page
    When I enter username and password
    And I click the login button
    Then I should see the dashboard

  Scenario Outline: login failure (Empty Fields)
    Given I am on the login page
    When I enter invalid "<username>" and "<password>"
    And I click the login button
    Then I should see the error message  
    Examples:
    | username  |  password   |
    | invalid   |  rt2345     | 
    | rweet     |  serert1234 |

  Scenario: login failure (Empty Fields)
    Given I am on the login page
    When I leave username and password empty
    And I click the login button
    Then I should see the error text message
