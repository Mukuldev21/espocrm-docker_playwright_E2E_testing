// Generated from: features\login.feature
import { test } from "playwright-bdd";

test.describe('Authentication Module', () => {

  test('TC001: Verify successful login', { tag: ['@parentSuite:EspoCRM_E2E_Tests', '@suite:Authentication_Module', '@severity:critical', '@no-auth', '@TC001'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the login page', null, { page }); 
    await When('I enter username and password', null, { page }); 
    await And('I click the login button', null, { page }); 
    await Then('I should see the dashboard', null, { page }); 
  });

  test.describe('TC002: Verify login failure (Invalid Credentials) - User: <username>', () => {

    test('TC002: Verify login failure (Invalid Credentials) - User: invalid', { tag: ['@parentSuite:EspoCRM_E2E_Tests', '@suite:Authentication_Module', '@severity:critical', '@no-auth', '@TC002'] }, async ({ Given, When, Then, And, page }) => { 
      await Given('I am on the login page', null, { page }); 
      await When('I enter invalid "invalid" and "rt2345"', null, { page }); 
      await And('I click the login button', null, { page }); 
      await Then('I should see the error message', null, { page }); 
    });

    test('TC002: Verify login failure (Invalid Credentials) - User: rweet', { tag: ['@parentSuite:EspoCRM_E2E_Tests', '@suite:Authentication_Module', '@severity:critical', '@no-auth', '@TC002'] }, async ({ Given, When, Then, And, page }) => { 
      await Given('I am on the login page', null, { page }); 
      await When('I enter invalid "rweet" and "serert1234"', null, { page }); 
      await And('I click the login button', null, { page }); 
      await Then('I should see the error message', null, { page }); 
    });

  });

  test('TC003: Verify login failure (Empty Fields)', { tag: ['@parentSuite:EspoCRM_E2E_Tests', '@suite:Authentication_Module', '@severity:critical', '@no-auth', '@TC003'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the login page', null, { page }); 
    await When('I leave username and password empty', null, { page }); 
    await And('I click the login button', null, { page }); 
    await Then('I should see the error text message', null, { page }); 
  });

  test('TC004: Verify logout functionality', { tag: ['@parentSuite:EspoCRM_E2E_Tests', '@suite:Authentication_Module', '@severity:critical', '@no-auth', '@TC004'] }, async ({ Given, When, Then, page }) => { 
    await Given('I am on the dashboard', null, { page }); 
    await When('I click the logout button', null, { page }); 
    await Then('I should be redirected to the login page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":11,"tags":["@parentSuite:EspoCRM_E2E_Tests","@suite:Authentication_Module","@severity:critical","@no-auth","@TC001"],"steps":[{"pwStepLine":7,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I enter username and password","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And I click the login button","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I should see the dashboard","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":25,"tags":["@parentSuite:EspoCRM_E2E_Tests","@suite:Authentication_Module","@severity:critical","@no-auth","@TC002"],"steps":[{"pwStepLine":16,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When I enter invalid \"invalid\" and \"rt2345\"","stepMatchArguments":[{"group":{"start":16,"value":"\"invalid\"","children":[{"start":17,"value":"invalid","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":30,"value":"\"rt2345\"","children":[{"start":31,"value":"rt2345","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"And I click the login button","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":26,"tags":["@parentSuite:EspoCRM_E2E_Tests","@suite:Authentication_Module","@severity:critical","@no-auth","@TC002"],"steps":[{"pwStepLine":23,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When I enter invalid \"rweet\" and \"serert1234\"","stepMatchArguments":[{"group":{"start":16,"value":"\"rweet\"","children":[{"start":17,"value":"rweet","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":28,"value":"\"serert1234\"","children":[{"start":29,"value":"serert1234","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"And I click the login button","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message","stepMatchArguments":[]}]},
  {"pwTestLine":31,"pickleLine":29,"tags":["@parentSuite:EspoCRM_E2E_Tests","@suite:Authentication_Module","@severity:critical","@no-auth","@TC003"],"steps":[{"pwStepLine":32,"gherkinStepLine":30,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When I leave username and password empty","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"And I click the login button","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then I should see the error text message","stepMatchArguments":[]}]},
  {"pwTestLine":38,"pickleLine":36,"tags":["@parentSuite:EspoCRM_E2E_Tests","@suite:Authentication_Module","@severity:critical","@no-auth","@TC004"],"steps":[{"pwStepLine":39,"gherkinStepLine":37,"keywordType":"Context","textWithKeyword":"Given I am on the dashboard","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When I click the logout button","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the login page","stepMatchArguments":[]}]},
]; // bdd-data-end