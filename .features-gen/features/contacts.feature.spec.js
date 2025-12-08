// Generated from: features\contacts.feature
import { test } from "playwright-bdd";

test.describe('Contacts Module', () => {

  test('TC011: Create New Contact', { tag: ['@parentSuite:EspoCRM_E2E_Tests', '@suite:Contacts_Module', '@severity:critical', '@TC011'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the dashboard', null, { page }); 
    await When('I click on the "Contacts" menu item', null, { page }); 
    await Then('I should be navigated to the "Contacts" page', null, { page }); 
    await When('I click the "Create Contact" button', null, { page }); 
    await And('I enter unique contact details', null, { page }); 
    await And('I click the "Save" button', null, { page }); 
    await Then('I should see the newly created contact', null, { page }); 
  });

  test('TC012: Filter Contact', { tag: ['@parentSuite:EspoCRM_E2E_Tests', '@suite:Contacts_Module', '@severity:critical', '@TC012'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the dashboard', null, { page }); 
    await When('I click on the "Contacts" menu item', null, { page }); 
    await And('I search for the created contact', null, { page }); 
    await Then('I should see the contact in the list', null, { page }); 
  });

  test('TC013: Edit Contact', { tag: ['@parentSuite:EspoCRM_E2E_Tests', '@suite:Contacts_Module', '@severity:critical', '@TC013'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the dashboard', null, { page }); 
    await When('I click on the "Contacts" menu item', null, { page }); 
    await And('I click the "Create Contact" button', null, { page }); 
    await And('I enter unique contact details', null, { page }); 
    await And('I click the "Save" button', null, { page }); 
    await Then('I should see the newly created contact', null, { page }); 
    await When('I click the "Edit" button', null, { page }); 
    await And('I update the contact name to include "Updated"', null, { page }); 
    await And('I click the "Save" button', null, { page }); 
    await Then('I should see the updated contact name', null, { page }); 
  });

  test('TC014: Delete Contact', { tag: ['@parentSuite:EspoCRM_E2E_Tests', '@suite:Contacts_Module', '@severity:critical', '@TC014'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the dashboard', null, { page }); 
    await When('I click on the "Contacts" menu item', null, { page }); 
    await And('I click the "Create Contact" button', null, { page }); 
    await And('I enter unique contact details', null, { page }); 
    await And('I click the "Save" button', null, { page }); 
    await Then('I should see the newly created contact', null, { page }); 
    await When('I delete the created contact', null, { page }); 
    await Then('I should not see the contact in the list', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\contacts.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@parentSuite:EspoCRM_E2E_Tests","@suite:Contacts_Module","@severity:critical","@TC011"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I am on the dashboard","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I click on the \"Contacts\" menu item","stepMatchArguments":[{"group":{"start":15,"value":"\"Contacts\"","children":[{"start":16,"value":"Contacts","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I should be navigated to the \"Contacts\" page","stepMatchArguments":[{"group":{"start":29,"value":"\"Contacts\"","children":[{"start":30,"value":"Contacts","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I click the \"Create Contact\" button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And I enter unique contact details","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And I click the \"Save\" button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then I should see the newly created contact","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":15,"tags":["@parentSuite:EspoCRM_E2E_Tests","@suite:Contacts_Module","@severity:critical","@TC012"],"steps":[{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given I am on the dashboard","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I click on the \"Contacts\" menu item","stepMatchArguments":[{"group":{"start":15,"value":"\"Contacts\"","children":[{"start":16,"value":"Contacts","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"And I search for the created contact","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then I should see the contact in the list","stepMatchArguments":[]}]},
  {"pwTestLine":23,"pickleLine":22,"tags":["@parentSuite:EspoCRM_E2E_Tests","@suite:Contacts_Module","@severity:critical","@TC013"],"steps":[{"pwStepLine":24,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"Given I am on the dashboard","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When I click on the \"Contacts\" menu item","stepMatchArguments":[{"group":{"start":15,"value":"\"Contacts\"","children":[{"start":16,"value":"Contacts","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"And I click the \"Create Contact\" button","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"And I enter unique contact details","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"And I click the \"Save\" button","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then I should see the newly created contact","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When I click the \"Edit\" button","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"And I update the contact name to include \"Updated\"","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"And I click the \"Save\" button","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then I should see the updated contact name","stepMatchArguments":[]}]},
  {"pwTestLine":36,"pickleLine":35,"tags":["@parentSuite:EspoCRM_E2E_Tests","@suite:Contacts_Module","@severity:critical","@TC014"],"steps":[{"pwStepLine":37,"gherkinStepLine":36,"keywordType":"Context","textWithKeyword":"Given I am on the dashboard","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"When I click on the \"Contacts\" menu item","stepMatchArguments":[{"group":{"start":15,"value":"\"Contacts\"","children":[{"start":16,"value":"Contacts","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":39,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"And I click the \"Create Contact\" button","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"And I enter unique contact details","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":40,"keywordType":"Action","textWithKeyword":"And I click the \"Save\" button","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"Then I should see the newly created contact","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":42,"keywordType":"Action","textWithKeyword":"When I delete the created contact","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then I should not see the contact in the list","stepMatchArguments":[]}]},
]; // bdd-data-end