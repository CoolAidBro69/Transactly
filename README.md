**A basic money transfer app**


Welcome to the Money Transfer Application! This application allows users to sign up, sign in, and transfer money securely, leveraging database management system (DBMS) transactions to ensure data integrity and consistency.
Features

**User Management**
 -   Sign Up: Users can create a new account with a unique username and password.
 -   Sign In: Existing users can authenticate themselves using their credentials.

**Money Transfer**
-    Transfer Funds: Authenticated users can transfer money between their own accounts or to other users.

**Security**
- Transaction Integrity: DBMS transactions are used to guarantee that money transfers either complete entirely or not at all, preventing partial transactions and maintaining data consistency.

**Technologies Used**

 -   Backend: Implemented in Express.
 -   Database: Utilizes MongoDB for storing user information, account balances, and transaction records.
 -  Transactions: DBMS transactions are employed to manage concurrency and ensure ACID properties (Atomicity, Consistency, Isolation, Durability) during money transfers.

