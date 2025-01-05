# React Payments App

## Features

 - Created using ReactJS (v_18.3.1) and Tailwind CSS (v_3.4)
 - Routing enabled (Currently 2 pages)
 - Features include Users Dashboard, Users Settings Page, Topbar search
 - Responsive desgin to accomodate large and small screens
 - Added a custom Debounce hook to delay search results
 - Used Redux and Redux saga used for fetching data/making API calls.
 - Demonstrated the use of code-splitting by Lazy loading the major components.
 - On the User settings page, instead of simply displaying the fields, I have prefilled them in custom inputs and added validation logic which is triggered when user hits "Edit User" button.
 - json-server mocks the HTTP API calls with data being stored in db.json in root directory
 - Test cases written for Custom Input, Custom Button (unit tests for user interactions). TC for validation logic and Search functionality (integration test).
 - All inputs, buttons created without external libraries

 - External libraries used for
    - Fontawesome icons
    - axios
    - redux saga
    - json-server to mock API calls

## Setup
 
 - install the dependencies using 'npm install'.
 - Open 2 terminals (1 if already using VS code) and navigate to the project directory
 - run "npm run mock-server" on one terminal. This will start up the mock server for HTTP endpoints
 - run "npm start" to start the react application
 - test cases can be run using 'npm test'.

 ## Deployment

 - The app has been deployed on Vercel. It directly accesses the db.json file for fetching/updating the data as it is serverless. (Creating a json-server itself is a complicated task which works seamlessly in local)
 - Vercel Link https://cybernetics-assignment.vercel.app/
