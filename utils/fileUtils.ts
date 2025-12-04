import * as fs from 'fs';
import * as path from 'path';

const ACCOUNT_NAMES_FILE = path.join(process.cwd(), 'fixtures', 'accountnamesadded.json');

export function saveAccountName(name: string) {
    let accountNames: string[] = [];

    if (fs.existsSync(ACCOUNT_NAMES_FILE)) {
        try {
            const fileContent = fs.readFileSync(ACCOUNT_NAMES_FILE, 'utf-8');
            const parsed = JSON.parse(fileContent);

            if (Array.isArray(parsed)) {
                // Check if it's an array of strings
                if (parsed.length === 0 || typeof parsed[0] === 'string') {
                    accountNames = parsed as string[];
                } else {
                    // It was an array of objects (previous format), reset
                    accountNames = [];
                }
            } else {
                // It was an object (previous format), reset
                accountNames = [];
            }
        } catch (error) {
            console.error('Error reading account names file:', error);
            accountNames = [];
        }
    }

    accountNames.push(name);

    try {
        fs.writeFileSync(ACCOUNT_NAMES_FILE, JSON.stringify(accountNames, null, 2));
        console.log(`Saved account name "${name}" to ${ACCOUNT_NAMES_FILE}`);
    } catch (error) {
        console.error('Error writing to account names file:', error);
    }
}

export function getRandomAccountName(): string | null {
    if (fs.existsSync(ACCOUNT_NAMES_FILE)) {
        try {
            const fileContent = fs.readFileSync(ACCOUNT_NAMES_FILE, 'utf-8');
            const accountNames = JSON.parse(fileContent);
            if (Array.isArray(accountNames) && accountNames.length > 0) {
                const randomIndex = Math.floor(Math.random() * accountNames.length);
                return accountNames[randomIndex];
            }
        } catch (error) {
            console.error('Error reading account names file:', error);
        }
    }
    return null;
}
