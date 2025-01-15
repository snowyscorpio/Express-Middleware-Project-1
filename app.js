const express = require('express');

const app = express();
const port = 3000;

// Middleware 1: Logs "Hello1" to the console for every request.
const middlewareHello1 = (req, res, next) => {
  console.log('Hello1');
  next();
};

// Middleware 2: Logs "Hello2" to the console for every request.
const middlewareHello2 = (req, res, next) => {
  console.log('Hello2');
  next();
};

// Use both middlewares for all routes.
app.use([middlewareHello1, middlewareHello2]);


// Route: Serves an HTML response for "/users".
app.use('/users', (req, res) => {
  res.send(htmlUsers);
});

const htmlUsers = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>User's Profile</title>
    </head>
    <body>
        <h1>User Details</h1>
        <p>ID: user id </p>
        <p>Name: user name </p>
        <p>Email: user email </p>
        <p>Age: user age </p>
    </body>
    </html>
  `;

  
// Route: Serves an HTML response for all other paths.
app.use('/', (req, res) => {
  res.send(htmlForAll);
});

const htmlForAll = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>IDK</title>
    </head>
    <body>
        <h1> Randome </h1>
        <p> Once, in a quiet village, a curious orange cat named Milo discovered an old, dusty key hidden under the garden shed. Determined to find its lock, Milo wandered through the village, meowing at doors and sniffing corners. At sunset, he reached the ivy-covered gate of the abandoned library. To his surprise, the key fit perfectly. Inside, books and scrolls whispered ancient tales, and Milo became the library’s new guardian, curling up on warm bookshelves, keeping stories alive. Villagers whispered that Milo unlocked more than the library—he opened a world of imagination for all who visited.  </p>
    </body>
    </html>
  `;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});