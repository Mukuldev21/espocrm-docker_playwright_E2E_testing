@parentSuite:EspoCRM_E2E_Tests @suite:Navigation_Module @severity:critical
Feature: General Navigation Module

    @TC005
    Scenario: TC005: Verify Navigation Menu Items
        Given I am on the dashboard
        Then I should see the "Accounts" menu item
        And I should see the "Contacts" menu item
        And I should see the "Leads" menu item
        And I should see the "Opportunities" menu item
        #And I should see the "Cases" menu item

    @TC006
    Scenario: TC006: Verify Menu Navigation
        Given I am on the dashboard
        When I click on the "Accounts" menu item
        Then I should be navigated to the "Accounts" page
        When I click on the "Contacts" menu item
        Then I should be navigated to the "Contacts" page
