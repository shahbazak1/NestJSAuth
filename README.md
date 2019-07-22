# Implementation of Authentication in NestJS

This is a basic implementation of the authentication technique using NestJS and Passport+JWT. There are 3 users hardcoded in the code, they will run in memory. Details about the users can be found in the file: users/users.service.ts

## Instructions 

There are 3 users hardcoded in the code, they will run in memory. Details about the users can be found in the file: src/users/users.service.ts. To test, you may use cURL or POSTMAN but this readme will give examples in cURL.

- To start the code, run the command: npm run start:dev
- Initially, send a GET request: curl http://localhost:3000/api/me
- The terminal will show: result -> {"statusCode":401,"error":"Unauthorized"}
- Now login the user: curl -X POST http://localhost:3000/api/login -d '{"username": "john", "password": "changeme"}' -H "Content-Type: application/json"
- The terminal will show: result -> {"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vybm... }
- Now, using the access token as bearer code, test a protected route: curl http://localhost:3000/api/me -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vybm..."
- The terminal will show: result -> {"userId":1,"username":"john"}
- You have to test the route within 60s of obtaining the access token as this is an expiry period embedded in the code.
- If you test the route again after 60s, the terminal will show: result -> {"statusCode":401,"error":"Unauthorized"}
