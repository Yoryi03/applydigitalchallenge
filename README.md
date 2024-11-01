# Apply Digital Challenge

This project includes Cypress for end-to-end testing. Cypress is a powerful testing framework that allows you to easily create, manage, and run tests for web applications. Below are the commands available for running Cypress in various modes.

## Prerequisites

Ensure Cypress is installed by running:
```bash
npm install
```

## Cypress Commands
The following scripts are available to run Cypress tests in different environments and configurations.

1. npm run cypress:open
Description: Opens the Cypress Test Runner in GUI mode. This allows you to select and run individual tests interactively, observe test execution, and debug your application as the tests run.

Usage:

```bash
npm run cypress:open
```

2. npm run cypress:run
Description: Runs all Cypress tests in headless mode using the default browser (Electron). This command is typically used in CI/CD environments where tests need to run without user interaction.

Usage:

```bash
npm run cypress:run
```

3. npm run cypress:run:headless
Description: Similar to cypress:run, but explicitly runs all tests in headless mode, using the default headless browser.

Usage:

```bash
npm run cypress:run:headless
```

4. npm run cypress:run:chrome
Description: Runs all tests headless in Google Chrome. This command is useful if you want to ensure that tests pass on Chrome specifically, which is commonly used in production environments.

Usage:

```bash
npm run cypress:run:chrome
```

5. npm run cypress:run:firefox
Description: Runs all tests headless in Firefox. This can be useful to confirm compatibility with Firefox, ensuring your application behaves consistently across different browsers.

Usage:

```bash
npm run cypress:run:firefox
```