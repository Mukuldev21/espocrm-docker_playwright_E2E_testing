// Generated from: features\accounts.feature
import { test } from "playwright-bdd";

test.describe('Accounts Module', () => {

  test('TC007: Create New Account', { tag: ['@parentSuite:EspoCRM_E2E_Tests', '@suite:Accounts_Module', '@severity:critical', '@TC007'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the dashboard', null, { page }); 
    await When('I click on the "Accounts" menu item', null, { page }); 
    await Then('I should be navigated to the "Accounts" page', null, { page }); 
    await When('I click the "Create Account" button', null, { page }); 
    await And('I enter unique account details', null, { page }); 
    await And('I click the "Save" button', null, { page }); 
    await Then('I should see the newly created account', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\accounts.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@parentSuite:EspoCRM_E2E_Tests","@suite:Accounts_Module","@severity:critical","@TC007"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I am on the dashboard","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I click on the \"Accounts\" menu item","stepMatchArguments":[{"group":{"start":15,"value":"\"Accounts\"","children":[{"start":16,"value":"Accounts","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I should be navigated to the \"Accounts\" page","stepMatchArguments":[{"group":{"start":29,"value":"\"Accounts\"","children":[{"start":30,"value":"Accounts","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I click the \"Create Account\" button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And I enter unique account details","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And I click the \"Save\" button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then I should see the newly created account","stepMatchArguments":[]}]},
]; // bdd-data-end