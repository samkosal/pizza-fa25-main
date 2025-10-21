// Import the express module
import express from 'express';

// Create an instance of an Express application
const app = express();

// Enable static files serving 
app.use(express.static('public'));

// Allow the app to parse form data
app.use(express.urlencoded({ extended: true }));

//create an Array to store orders
const orders = [];

// Define the port number where our server will listen 
const PORT = 3000;

// Define a default "route" ('/')
// req: contains information about the incoming request
// res: allows us to send back a response to the client
app.get('/', (req, res) => {
    // Send "Helow, World!" as a resonce to the client
    // res.send('<h1> Welcome to Poppa\'s Pizza!</h1>');
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// Define a "contact-us" route
app.get('/contact-us', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/contact.html`);
})

// define a "confirmation" route
app.get('/confirm', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/confirm.html`);
})

// define a "submit-order" route
app.get('/admin', (req, res) => {   

    res.send(orders);
    // res.sendFile(`${import.meta.dirname}/views/admin.html`);
})

app.post('/submit-order', (req, res) => {

    //create a JSON object to store the data
    const order = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        method: req.body.method,
        toppings: req.body.toppings,
        size: req.body.size,
        comment: req.body.comment
    };
    orders.push(order);
    console.log(orders);

    // send user to confirmation page
    res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
})

// start the server and make it listen on the port
// specified above
app.listen(PORT, () => {
    console.log(`Sever is running at http://localhost:${PORT}`);
});
