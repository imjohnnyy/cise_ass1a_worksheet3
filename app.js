// app.js

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const books = require('./routes/api/books');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// use Routes
app.use('/api/books', books);


//Path Module
const path = require("path");

//Serving the build folder. This acts as the middleware.
app.use(express.static(path.resolve(__dirname, "./mern-app/build")));

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./mern-app/build", "index.html"));
});

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));