# Assignment 1
1. Spin up a Node.js driven Server (on port 3000).
2. Handle two routes: '/' and '/users'.
   - Return some greeting text on the '/' route.
   - Return a list of dummy users on the '/users' route.
3. Add a form with a text input for the "username" on the '/' page and submit a POST request to '/create-user' upon a button click.
4. Add the '/create-user' route, parse the incoming data (i.e., the username), and simply log it to the console. 

# Assignment 2
1. Create an npm project and install Express.js (also install Nodemon).
2. Create an Express.js app that funnels the requests through 2 middleware functions that log. something to the console and return one response.
3. Handle requests to "/" and "/users" such that each request only has one handler/middleware that does something with it (e.g. send a dummy response).
