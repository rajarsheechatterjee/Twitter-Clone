# TwitterClone

A simple Twitter clone built with the MERN stack

## My Tech Stack (MERN)

#### Front-end
* Front-end Framework: `React.js (with Redux)`

#### Back-end
* For handling server requests: `Node.js with Express.js Framework`
* As Database: `MongoDB`
* API tested using: `POSTMAN`

## Guidelines to setup

### Prerequisites
* NPM should be installed: `NPM version > 6.8.5`
* NODE should be installed: `NODE LTS version > 10.12.8`
* MongoDB should be installed: `MongoDB version > 4.1.0`

### Steps
1. Create a `default.json` file in the config directory with the following -
    ```
    {
      "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
      "jwtSecret": "secret"
    }
    ```

2. Run these commands then - 
    ```
    npm run installDep (To install all the dependencies)
    
    npm run auditDep (Run this to audit fix all the vulnerabilities)
    ```
3. Start the servers
    ```
    Option 1 (for running both the servers simultaneously):
    
    npm run dev
    
    Option 2 (for running both the servers individually):
    
    npm run server (for backend server only)
    
    npm run client (for frontend server only)
    ```

  
#### Screenshots

<img src="/screenshots/homepage.png" width=340px /><img src="/screenshots/profile.png" width=340px />
<img src="/screenshots/tweet.png" width=340px /><img src="/screenshots/edit.png" width=340px />
<img src="/screenshots/login.png" width=340px /><img src="/screenshots/signup.png" width=340px />

