export function generateAccountDetails() {
    const timestamp = new Date().getTime();
    return {
        name: `Test Corp ${timestamp}`,
        email: `test${timestamp}@example.com`
    };
}
