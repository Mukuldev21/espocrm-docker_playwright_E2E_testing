// Generated from: features\navigation.feature
import { test } from "playwright-bdd";

test.describe('Navigation', () => {

  test('TC005: Verify Navigation Menu Items', { tag: ['@parentSuite:EspoCRM_E2E_Tests', '@suite:Navigation_Module', '@severity:critical', '@TC005'] }, async ({ Given, Then, And, page }) => { 
    await Given('I am on the dashboard', null, { page }); 
    await Then('I should see the "Accounts" menu item', null, { page }); 
    await And('I should see the "Contacts" menu item', null, { page }); 
    await And('I should see the "Leads" menu item', null, { page }); 
    await And('I should see the "Opportunities" menu item', null, { page }); 
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
]; // bdd-data-end