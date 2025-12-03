// Generated from: features\navigation.feature
import { test } from "playwright-bdd";

test.describe('General Navigation Module', () => {

  test('TC005: Verify Navigation Menu Items', { tag: ['@parentSuite:EspoCRM_E2E_Tests', '@suite:Navigation_Module', '@severity:critical', '@TC005'] }, async ({ Given, Then, And, page }) => { 
    await Given('I am on the dashboard', null, { page }); 
    await Then('I should see the "Accounts" menu item', null, { page }); 
    await And('I should see the "Contacts" menu item', null, { page }); 
    await And('I should see the "Leads" menu item', null, { page }); 
    await And('I should see the "Opportunities" menu item', null, { page }); 
  });

  test('TC006: Verify Menu Navigation', { tag: ['@parentSuite:EspoCRM_E2E_Tests', '@suite:Navigation_Module', '@severity:critical', '@TC006'] }, async ({ Given, When, Then, page }) => { 
    await Given('I am on the dashboard', null, { page }); 
    await When('I click on the "Accounts" menu item', null, { page }); 
    await Then('I should be navigated to the "Accounts" page', null, { page }); 
    await When('I click on the "Contacts" menu item', null, { page }); 
    await Then('I should be navigated to the "Contacts" page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\navigation.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@parentSuite:EspoCRM_E2E_Tests","@suite:Navigation_Module","@severity:critical","@TC005"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I am on the dashboard","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Accounts\" menu item","stepMatchArguments":[{"group":{"start":17,"value":"\"Accounts\"","children":[{"start":18,"value":"Accounts","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"And I should see the \"Contacts\" menu item","stepMatchArguments":[{"group":{"start":17,"value":"\"Contacts\"","children":[{"start":18,"value":"Contacts","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"And I should see the \"Leads\" menu item","stepMatchArguments":[{"group":{"start":17,"value":"\"Leads\"","children":[{"start":18,"value":"Leads","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"And I should see the \"Opportunities\" menu item","stepMatchArguments":[{"group":{"start":17,"value":"\"Opportunities\"","children":[{"start":18,"value":"Opportunities","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":14,"pickleLine":14,"tags":["@parentSuite:EspoCRM_E2E_Tests","@suite:Navigation_Module","@severity:critical","@TC006"],"steps":[{"pwStepLine":15,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given I am on the dashboard","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When I click on the \"Accounts\" menu item","stepMatchArguments":[{"group":{"start":15,"value":"\"Accounts\"","children":[{"start":16,"value":"Accounts","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then I should be navigated to the \"Accounts\" page","stepMatchArguments":[{"group":{"start":29,"value":"\"Accounts\"","children":[{"start":30,"value":"Accounts","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When I click on the \"Contacts\" menu item","stepMatchArguments":[{"group":{"start":15,"value":"\"Contacts\"","children":[{"start":16,"value":"Contacts","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then I should be navigated to the \"Contacts\" page","stepMatchArguments":[{"group":{"start":29,"value":"\"Contacts\"","children":[{"start":30,"value":"Contacts","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end