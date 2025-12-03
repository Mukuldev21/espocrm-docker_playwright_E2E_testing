@parentSuite:EspoCRM_E2E_Tests @suite:Accounts_Module @severity:critical
Feature: Accounts Module

    @TC007
    Scenario: TC007: Create New Account
        Given I am on the dashboard
        When I click on the "Accounts" menu item
        Then I should be navigated to the "Accounts" page
        When I click the "Create Account" button
        And I enter unique account details
        And I click the "Save" button
        Then I should see the newly created account
