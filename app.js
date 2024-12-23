const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up EJS as the templating engine
app.set('view engine', 'ejs');

// Set the views directory explicitly (optional if using default)
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Serve static files (like CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Route to display the greeting card form
app.get('/', (req, res) => {
    res.render('index');  // Ensure this matches your file name exactly
});

// Route to handle form submission and display the greeting card
app.post('/greet', (req, res) => {
    const name = req.body.name;
    res.render('greeting', { name });  // Ensure this matches your file name exactly
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
