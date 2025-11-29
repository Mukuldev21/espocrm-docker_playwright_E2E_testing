const fs = require('fs');
const path = require('path');

const allureResultsDir = path.join(__dirname, '..', 'allure-results');

if (!fs.existsSync(allureResultsDir)) {
    fs.mkdirSync(allureResultsDir, { recursive: true });
}

// 1. Generate environment.properties
const envProperties = `
Browser=Chrome (Playwright)
Environment=Local Docker
URL=http://localhost:8080
User=Admin
OS=${process.platform}
NodeVersion=${process.version}
`;

fs.writeFileSync(path.join(allureResultsDir, 'environment.properties'), envProperties.trim());
console.log('Generated environment.properties');

// 2. Generate categories.json
const categories = [
    {
        name: "Product Defects",
        matchedStatuses: ["failed"],
        messageRegex: ".*expect.*"
    },
    {
        name: "Test Defects",
        matchedStatuses: ["broken"],
        messageRegex: ".*Timeout.*"
    },
    {
        name: "Infrastructure Problems",
        matchedStatuses: ["broken"],
        messageRegex: ".*Connection refused.*"
    }
];

fs.writeFileSync(path.join(allureResultsDir, 'categories.json'), JSON.stringify(categories, null, 2));
console.log('Generated categories.json');
