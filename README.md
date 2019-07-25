# Implementation of Authentication in NestJS

This is a basic implementation of the authentication technique using NestJS and Passport+JWT. There are 3 users hardcoded in the code, they will run in memory. Details about the users can be found in the file: users/users.service.ts

## Instructions 

There are 3 users hardcoded in the code, they will run in memory. Details about the users can be found in the file: src/users/users.service.ts. To test, you may use cURL or POSTMAN but this readme will give examples in cURL.

- To start the code, run the command: npm run start:dev
- Initially, send a GET request: curl http://localhost:3000/api/me
- The terminal will show: {"statusCode":401,"error":"Unauthorized"}
- Now login the user: curl -X POST http://localhost:3000/api/login -d '{"username": "john", "password": "changeme"}' -H "Content-Type: application/json"
- The terminal will show: {"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vybm... }
- Now, using the access token as bearer code, test a protected route: curl http://localhost:3000/api/me -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vybm..."
- The terminal will show: {"userId":1,"username":"john"}
- You have to test the route within 60s of obtaining the access token as this is an expiry period embedded in the code.
- If you test the route again after 60s, the terminal will show: {"statusCode":401,"error":"Unauthorized"}
- To register a user, run the command: curl -X POST http://localhost:3000/api/register -d '{"id": 4, "username": "SAK", "password": "changeme2"}' -H "Content-Type: application/json"
- Then to test that the new user has been added, run: curl -X POST http://localhost:3000/api/login -d '{"username": "SAK", "password": "changeme2"}' -H "Content-Type: application/json"
- If everything goes well, the terminal will return an access token, now we use this access token to hit a protected route that will return us the userID and username.
- Use the returned access token and run the command: curl http://localhost:3000/api/me -H "Authorization: Bearer access_token"
- The terminal will show this result: {"userId":4,"username":"SAK"}