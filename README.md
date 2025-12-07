# EspoCRM Docker & Playwright Testing

This project involves running EspoCRM locally using Docker and performing extensive automated testing using Playwright with TypeScript.

## Project Overview

*   **Application**: EspoCRM (running via Docker)
*   **Testing Framework**: Playwright
*   **Language**: TypeScript

## Prerequisites

Ensure you have the following installed on your local machine:

*   [Docker](https://www.docker.com/) & Docker Compose
*   [Node.js](https://nodejs.org/) (LTS version recommended)
*   npm (usually comes with Node.js) or yarn

## Setup Instructions

### 1. Start EspoCRM

To start the EspoCRM application using the provided Docker Compose configuration:

```bash
docker-compose up -d
```

Wait for the containers to initialize. You can check the status with:

```bash
docker-compose ps
```

Access the application at `http://localhost:4141` (or the port defined in your `docker-compose.yml`).

### 2. Install Dependencies

Initialize the project and install Playwright dependencies (if not already done):

```bash
npm init -y
npm init playwright@latest
```

Follow the prompts to configure Playwright for TypeScript.

## Testing

This project uses Playwright for end-to-end testing.

### Test Documentation
*   [Test Plan](testplan.md): High-level strategy and scope of testing.
*   [Test Cases](testcases.md): Detailed test scenarios and steps.

### Running Tests

To run all Cucumber BDD tests:
```bash
npm run bdd
```

To run a specific feature file (e.g., `login.feature`):
```bash
npm run bdd -- "login.feature"
```

To run tests in UI mode:
```bash
npx playwright test --ui
```
To run a specific feature file:
```bash
npm run bdd -- "features/login.feature"
```

### Data Generation

To generate bulk test data (e.g., create 5 new accounts):
```bash
npm run generate-data
```
This command will:
1. Run the data generation script.
2. Create 5 new accounts in EspoCRM.
3. Append the new account names to `fixtures/accountnamesadded.json`.

### Reporting

The project uses **Allure Report** for detailed test execution reports.

*   **Automatic Generation**: The Allure report is automatically generated and opened in your default browser after running `npm run bdd`.
*   **Dark Theme**: The report uses a custom Dark Mode theme for better readability.
*   **Content**: The report includes:
    *   **Suites**: Grouped by Parent Suite (Project) and Suite (Module).
    *   **Test Cases**: Detailed steps, parameters, and severity.
    *   **Environment**: Browser, OS, and User details.
    *   **Categories**: Classification of failures (e.g., Product Defects, Test Defects).

### Project Structure

*   `docker-compose.yml`: Docker configuration for EspoCRM.
*   `tests/`: Directory containing Playwright test specifications.
*   `pages/`: Directory containing Page Object Model classes.
*   `fixtures/`: Directory containing test data and fixtures.
*   `playwright.config.ts`: Configuration file for Playwright.
*   `testplan.md`: High-level test plan.
*   `testcases.md`: Detailed test cases.

## Progress & Updates

This README will be updated as the testing suite expands and more scenarios are covered.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact [mukul.com12@gmail.com](mailto:mukul.com12@gmail.com).

## Acknowledgments

*   [Docker](https://www.docker.com/)
*   [Node.js](https://nodejs.org/)
*   [Playwright](https://playwright.dev/)
*   [TypeScript](https://www.typescriptlang.org/)

## Author

Mukul Dev Mahato
