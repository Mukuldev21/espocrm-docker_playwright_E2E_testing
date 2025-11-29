# EspoCRM Detailed Test Cases

## 1. Authentication Module

| ID | Title | Preconditions | Steps | Expected Result |
| :--- | :--- | :--- | :--- | :--- |
| **AUTH-01** | Verify successful login | User is on Login Page | 1. Enter valid username (e.g., 'admin').<br>2. Enter valid password (e.g., 'password').<br>3. Click 'Login' button. | User is redirected to the Dashboard/Home page. Navigation menu is visible. |
| **AUTH-02** | Verify login failure (Invalid Username) | User is on Login Page | 1. Enter invalid username.<br>2. Enter valid password.<br>3. Click 'Login' button. | Error message displayed (e.g., "Invalid credentials"). User remains on Login Page. |
| **AUTH-03** | Verify login failure (Invalid Password) | User is on Login Page | 1. Enter valid username.<br>2. Enter invalid password.<br>3. Click 'Login' button. | Error message displayed. User remains on Login Page. |
| **AUTH-04** | Verify login failure (Empty Fields) | User is on Login Page | 1. Leave username and password empty.<br>2. Click 'Login' button. | Validation error or message indicating fields are required. |
| **AUTH-05** | Verify logout functionality | User is logged in | 1. Click on User Profile menu (top right).<br>2. Click 'Logout'. | User is redirected to the Login Page. Browser back button does not return to logged-in session. |

## 2. General Navigation

| ID | Title | Preconditions | Steps | Expected Result |
| :--- | :--- | :--- | :--- | :--- |
| **NAV-01** | Verify Navigation Menu Items | User is logged in | 1. Observe the side/top navigation bar. | Menu contains items: Accounts, Contacts, Leads, Opportunities, Cases, etc. |
| **NAV-02** | Verify Menu Navigation | User is logged in | 1. Click on 'Accounts'.<br>2. Click on 'Contacts'. | Application navigates to the respective list views. URL updates accordingly (e.g., `/#Account`, `/#Contact`). |

## 3. Accounts Module

| ID | Title | Preconditions | Steps | Expected Result |
| :--- | :--- | :--- | :--- | :--- |
| **ACC-01** | Create New Account | User is on Accounts List | 1. Click 'Create Account' button.<br>2. Enter 'Name' (e.g., 'Test Corp').<br>3. Enter 'Email' (optional).<br>4. Click 'Save'. | Account is created. User is redirected to the Account Detail view. Success message appears. |
| **ACC-02** | Verify Account in List | Account 'Test Corp' exists | 1. Navigate to Accounts List.<br>2. Search for 'Test Corp'. | 'Test Corp' appears in the list. |
| **ACC-03** | Edit Account | User is on Account Detail | 1. Click 'Edit' button.<br>2. Change Name to 'Test Corp Updated'.<br>3. Click 'Save'. | Account name is updated to 'Test Corp Updated'. Changes reflected in Detail and List views. |
| **ACC-04** | Delete Account | User is on Account Detail | 1. Click 'Actions' dropdown (three dots).<br>2. Select 'Remove' or 'Delete'.<br>3. Confirm confirmation dialog. | Account is deleted. User redirected to Accounts List. Account no longer appears in search. |

## 4. Contacts Module

| ID | Title | Preconditions | Steps | Expected Result |
| :--- | :--- | :--- | :--- | :--- |
| **CON-01** | Create New Contact | User is on Contacts List | 1. Click 'Create Contact' button.<br>2. Enter 'First Name', 'Last Name'.<br>3. Link to an existing Account (e.g., 'Test Corp').<br>4. Click 'Save'. | Contact is created. Linked Account name is visible in the detail view. |
| **CON-02** | Filter Contacts | Multiple contacts exist | 1. Navigate to Contacts List.<br>2. Use filter input to search by Name. | Only contacts matching the search criteria are displayed. |
| **CON-03** | Edit Contact | User is on Contact Detail | 1. Click 'Edit'.<br>2. Update 'Email' field.<br>3. Click 'Save'. | Email is updated successfully. |
| **CON-04** | Delete Contact | User is on Contact Detail | 1. Click 'Actions' dropdown.<br>2. Select 'Remove'.<br>3. Confirm. | Contact is deleted and removed from the list. |
