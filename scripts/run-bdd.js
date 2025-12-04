const { execSync } = require('child_process');

// Get arguments passed to the script
const args = process.argv.slice(2).join(' ');

console.log('Starting BDD Test Execution...');

try {
    // 1. Clean allure-results
    console.log('\nStep 1: Cleaning allure-results...');
    execSync('npx rimraf allure-results', { stdio: 'inherit' });

    // 2. Generate BDD files
    console.log('\nStep 2: Generating BDD files...');
    execSync('npx bddgen', { stdio: 'inherit' });

    // 3. Run Tests (Auth + Functional)
    console.log('\nStep 3: Running Tests...');
    try {
        // Run Auth tests first
        console.log('Running Login Tests...');
        let authCmd = 'npm run test:auth';
        let functionalCmd = 'npm run test:functional';

        if (args) {
            // If the argument looks like a tag (starts with @) or just a string, treat it as a grep
            // If it starts with -, assume user passed flags like --grep or --headed
            const argString = args.trim().startsWith('-') ? ` -- ${args}` : ` -- --grep "${args}"`;
            authCmd += argString;
            functionalCmd += argString;
        }

        console.log(`Executing: ${authCmd}`);
        try {
            execSync(authCmd, { stdio: 'inherit' });
        } catch (e) {
            console.log('Login Tests execution finished (possibly with no matches or failures). Proceeding to Functional Tests...');
        }

        // Run Functional tests
        console.log('\nRunning Functional Tests...');
        console.log(`Executing: ${functionalCmd}`);
        execSync(functionalCmd, { stdio: 'inherit' });

    } catch (testError) {
        console.log('\nFunctional Test execution encountered failures. Proceeding to report generation...');
        // We don't exit here, we allow report generation to proceed, mimicking "|| true"
    }

    // 4. Generate Allure Metadata
    console.log('\nStep 4: Generating Allure Metadata...');
    execSync('node scripts/generate-allure-metadata.js', { stdio: 'inherit' });

    // 5. Generate and Open Report
    console.log('\nStep 5: Generating and Opening Report...');
    execSync('npm run report', { stdio: 'inherit' });

} catch (error) {
    console.error('\nAn error occurred during the script execution:', error.message);
    process.exit(1);
}
