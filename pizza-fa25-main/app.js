// Import the express module
import express from 'express';

// Create an instance of an Express application
const app = express();

// Enable static files serving 
app.use(express.static('public'));

// Define the port number where our server will listen 
const PORT = 3000;

// Define a default "route" ('/')
// req: contains information about the incoming request
// res: allows us to send back a response to the client
app.get('/', (req, res) => {
    // Send "Helow, World!" as a resonce to the client
    // res.send('<h1> Welcome to Poppa\'s Pizza!</h1>');
    res.sendFile(`${import.meta.dirname}/views/index.html`);
});

// start the server and make it listen on the port
// specified above
app.listen(PORT, () => {
    console.log(`Sever is running at http://localhost:${PORT}`);
});