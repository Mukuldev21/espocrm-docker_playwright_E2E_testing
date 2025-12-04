import * as fs from 'fs';
import * as path from 'path';

const ACCOUNT_NAMES_FILE = path.join(process.cwd(), 'fixtures', 'accountnamesadded.json');

export function saveAccountName(name: string) {
    let accountNames: { [key: string]: string } = {};

    if (fs.existsSync(ACCOUNT_NAMES_FILE)) {
        try {
            const fileContent = fs.readFileSync(ACCOUNT_NAMES_FILE, 'utf-8');
            accountNames = JSON.parse(fileContent);
            // Handle case where file might contain array from previous version
            if (Array.isArray(accountNames)) {
                accountNames = {};
            }
        } catch (error) {
            console.error('Error reading account names file:', error);
            accountNames = {};
        }
    }

    const nextIndex = Object.keys(accountNames).length + 1;
    const key = `account${nextIndex.toString().padStart(2, '0')}`;

    accountNames[key] = name;

    try {
        fs.writeFileSync(ACCOUNT_NAMES_FILE, JSON.stringify(accountNames, null, 2));
        console.log(`Saved account name "${name}" as "${key}" to ${ACCOUNT_NAMES_FILE}`);
    } catch (error) {
        console.error('Error writing to account names file:', error);
    }
}
