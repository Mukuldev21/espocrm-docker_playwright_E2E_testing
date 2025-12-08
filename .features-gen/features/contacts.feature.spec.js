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

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\contacts.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@parentSuite:EspoCRM_E2E_Tests","@suite:Contacts_Module","@severity:critical","@TC011"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I am on the dashboard","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I click on the \"Contacts\" menu item","stepMatchArguments":[{"group":{"start":15,"value":"\"Contacts\"","children":[{"start":16,"value":"Contacts","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I should be navigated to the \"Contacts\" page","stepMatchArguments":[{"group":{"start":29,"value":"\"Contacts\"","children":[{"start":30,"value":"Contacts","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I click the \"Create Contact\" button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And I enter unique contact details","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And I click the \"Save\" button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then I should see the newly created contact","stepMatchArguments":[]}]},
]; // bdd-data-end