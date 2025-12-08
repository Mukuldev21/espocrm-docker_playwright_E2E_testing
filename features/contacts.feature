@parentSuite:EspoCRM_E2E_Tests @suite:Contacts_Module @severity:critical
Feature: Contacts Module

    @TC011
    Scenario: TC011: Create New Contact
        Given I am on the dashboard
        When I click on the "Contacts" menu item
        Then I should be navigated to the "Contacts" page
        When I click the "Create Contact" button
        And I enter unique contact details
        And I click the "Save" button
        Then I should see the newly created contact

    @TC012
    Scenario: TC012: Filter Contact 
        Given I am on the dashboard
        When I click on the "Contacts" menu item
        And I search for the created contact
        Then I should see the contact in the list
