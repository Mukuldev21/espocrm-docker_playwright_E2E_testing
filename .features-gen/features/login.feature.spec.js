// Generated from: features\login.feature
import { test } from "playwright-bdd";

test.describe('Authentication', () => {

  test('Successful Login', async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the login page', null, { page }); 
    await When('I enter username and password', null, { page }); 
    await And('I click the login button', null, { page }); 
    await Then('I should see the dashboard', null, { page }); 
  });

  test.describe('login failure (Empty Fields)', () => {

    test('Example #1', async ({ Given, When, Then, And, page }) => { 
      await Given('I am on the login page', null, { page }); 
      await When('I enter invalid "invalid" and "rt2345"', null, { page }); 
      await And('I click the login button', null, { page }); 
      await Then('I should see the error message', null, { page }); 
    });

    test('Example #2', async ({ Given, When, Then, And, page }) => { 
      await Given('I am on the login page', null, { page }); 
      await When('I enter invalid "rweet" and "serert1234"', null, { page }); 
      await And('I click the login button', null, { page }); 
      await Then('I should see the error message', null, { page }); 
    });

  });

  test('login failure (Empty Fields)', async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the login page', null, { page }); 
    await When('I leave username and password empty', null, { page }); 
    await And('I click the login button', null, { page }); 
    await Then('I should see the error text message', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I enter username and password","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And I click the login button","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I should see the dashboard","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I enter invalid \"invalid\" and \"rt2345\"","stepMatchArguments":[{"group":{"start":16,"value":"\"invalid\"","children":[{"start":17,"value":"invalid","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":30,"value":"\"rt2345\"","children":[{"start":31,"value":"rt2345","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And I click the login button","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":23,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I enter invalid \"rweet\" and \"serert1234\"","stepMatchArguments":[{"group":{"start":16,"value":"\"rweet\"","children":[{"start":17,"value":"rweet","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":28,"value":"\"serert1234\"","children":[{"start":29,"value":"serert1234","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And I click the login button","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message","stepMatchArguments":[]}]},
  {"pwTestLine":31,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":32,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When I leave username and password empty","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"And I click the login button","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then I should see the error text message","stepMatchArguments":[]}]},
]; // bdd-data-end