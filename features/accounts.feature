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

    @TC008
    Scenario: TC008: Verify Account in List
        Given I am on the dashboard
        When I click on the "Accounts" menu item
        And I search for the created account
        Then I should see the account in the list

    @TC009
    Scenario: TC009: Edit Account
        Given I am on the dashboard
        When I click on the "Accounts" menu item
        And I click the "Create Account" button
        And I enter unique account details
        And I click the "Save" button
        Then I should see the newly created account
        When I click the "Edit" button
        And I update the account name to include "Updated"
        And I click the "Save" button
        Then I should see the updated account name

    @TC010
    Scenario: TC010: Delete Account
        Given I am on the dashboard
        When I click on the "Accounts" menu item
        And I click the "Create Account" button
        And I enter unique account details
        And I click the "Save" button
        Then I should see the newly created account
        When I delete the created account
        Then I should not see the account in the list
