const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const app = express();

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Database setup
mongoose.connect('mongodb://localhost/your-database-name', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

// Require models and routes
const User = require('./models/User');
const Student = require('./models/Student');
const Interview = require('./models/Interview');
const routes = require('./routes');

// Use routes
app.use('/', routes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
