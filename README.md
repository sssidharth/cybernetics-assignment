# React Payments App

 - Created using ReactJS (v_18) and Tailwind CSS (v_3.4)
 - Routing enabled
 - Features include Users Dashboard, Users Settings Page, Topbar search
 - Responsive desgin to accomodate large and small screens
 - Added a custom Debounce hook to delay search results
 - Redux saga used for fetching data
 - json-server mocks the HTTP API calls with data being stored in db.json in root directory
 - All inputs, buttons created without external libraries
 - External libraries used
    - Fontawesome icons
    - axios
    - redux saga
    - json-server to mock API calls

## Setup
 
 - install the dependencies using 'npm install'.
 - Open 2 terminals (1 if already using VS code) and navigate to the project directory
 - run "npm run mock-server" on one terminal. This will start up the mock server for HTTP endpoints
 - run "npm start" to start the react application
 - test cases can be run using 'npm test'. I've written a few unit test cases and a few integration tests.

 ## Deployment

 - The app has been deployed on Vercel. It directly accesses the db.json file for fetching/updating the data as it is serverless. (Creating a json-server itself is a complicated task which works seamlessly in local)
 - Vercel Link https://cybernetics-assignment.vercel.app/
