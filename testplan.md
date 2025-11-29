# EspoCRM Test Plan

## 1. Authentication Module

### 1.1 Login Functionality
- **Verify successful login** with valid credentials.
- **Verify login failure** with invalid username.
- **Verify login failure** with invalid password.
- **Verify login failure** with empty fields.
- **Verify "Remember Me"** functionality.
- **Check for SQL injection** or basic security vulnerabilities in input fields.

### 1.2 Logout Functionality
- **Verify successful logout** from the application.
- **Verify redirection** to the login page after logout.
- **Verify session termination** (back button should not work after logout).

## 2. General Navigation

### 2.1 Navigation Menu
- **Verify existence of main navigation bar**.
- **Verify all menu items** are clickable and lead to correct routes.
- **Verify active state** of the selected menu item.

## 3. Accounts Module

### 3.1 List View
- **Verify "Accounts" list loads** correctly.
- **Verify pagination** works (if applicable).
- **Verify sorting** by different columns (Name, Website, etc.).

### 3.2 Create Account
- **Verify "Create Account" button** opens the creation form.
- **Verify successful creation** of an account with mandatory fields.
- **Verify validation** for missing mandatory fields.
- **Verify cancelling** the creation process.

### 3.3 Edit/Delete Account
- **Verify editing** an existing account details.
- **Verify deleting** an account and ensuring it is removed from the list.

## 4. Contacts Module

### 4.1 List View
- **Verify "Contacts" list loads** correctly.
- **Verify filtering** contacts (e.g., by Account).

### 4.2 Create Contact
- **Verify "Create Contact" button** opens the form.
- **Verify linking a Contact to an Account** during creation.
- **Verify successful creation** with valid data.

### 4.3 Edit/Delete Contact
- **Verify updating** contact information (e.g., phone, email).
- **Verify deleting** a contact.
