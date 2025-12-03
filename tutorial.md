# EspoCRM Playwright BDD Framework Tutorial

This document explains how the automation framework works, how tests are generated, and the standard workflow for adding new tests.

## Framework Overview

This project uses **Playwright** combined with **playwright-bdd** to enable Behavior Driven Development (BDD). This allows us to write tests in plain English using Gherkin syntax (`.feature` files) while leveraging the power of Playwright for browser automation.

### Key Components

1.  **Feature Files (`features/*.feature`)**:
    -   These contain the test scenarios written in Gherkin syntax (Given, When, Then).
    -   They serve as the source of truth for what is being tested.

2.  **Step Definitions (`tests/steps/*.steps.ts`)**:
    -   These TypeScript files map the Gherkin steps to actual code execution.
    -   They use `createBdd()` from `playwright-bdd` to define `Given`, `When`, and `Then` steps.

3.  **Page Objects (`pages/*.ts`)**:
    -   Follows the Page Object Model (POM) design pattern.
    -   Encapsulates locators and methods for interacting with specific pages (e.g., `LoginPage`, `HomePage`).
    -   Keeps step definitions clean and maintainable.

4.  **Test Generation (`.features-gen/`)**:
    -   `playwright-bdd` automatically generates Playwright test files (`.spec.js`) based on your feature files and step definitions.
    -   **Note:** You do *not* edit files in `.features-gen/` manually.

5.  **Configuration (`playwright.config.ts`)**:
    -   Configures Playwright settings (browser, base URL, etc.) and BDD options.

## The Workflow: How to Add a New Test

The process follows a "Feature First" approach:

### 1. Write the Feature
Create a new `.feature` file in the `features/` directory (or add to an existing one). Describe your scenario using Gherkin.

**Example (`features/navigation.feature`):**
```gherkin
Feature: Navigation

    Scenario: Verify Navigation Menu Items
        Given I am on the dashboard
        Then I should see the "Accounts" menu item
```

### 2. Implement Step Definitions
Create or update a `.steps.ts` file in `tests/steps/`. Map the steps from your feature file to code.

**Example (`tests/steps/navigation.steps.ts`):**
```typescript
import { createBdd } from 'playwright-bdd';
import { HomePage } from '../../pages/homepage';
import { expect } from '@playwright/test';

const { Given, Then } = createBdd();

Given('I am on the dashboard', async ({ page }) => {
    // ... code to login and go to dashboard ...
});

Then('I should see the {string} menu item', async ({ page }, menuItem: string) => {
    const homePage = new HomePage(page);
    // ... verification logic ...
});
```

### 3. Generate Tests
Run the generation command to convert your feature files into Playwright executable tests.

```bash
npx bddgen
```
*This will update the `.features-gen/` directory.*

### 4. Run the Tests
Execute the generated tests using Playwright.

```bash
npx playwright test
```
Or run a specific feature:
```bash
npx playwright test features/navigation.feature
```

### 5. View Reports
After execution, you can view the standard Playwright report or the Allure report (if configured).

```bash
npx playwright show-report
```

## All-in-One Command

We have a convenience script in `package.json` that does everything (clean, generate, run, and report):

```bash
npm run bdd
```

## Summary of Commands

| Command | Description |
| :--- | :--- |
| `npx bddgen` | Generates Playwright test files from Feature files. |
| `npx playwright test` | Runs all tests. |
| `npx playwright test --ui` | Runs tests in UI mode (great for debugging). |
| `npm run bdd` | Full cycle: Clean -> Generate -> Run -> Report. |
