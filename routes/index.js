const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
  res.render('home'); // Render the home.handlebars view
});

// Include other route handlers here

module.exports = router;
