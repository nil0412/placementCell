const express = require('express');
const passport = require('passport');
const router = express.Router();

// User authentication routes
router.get('/login', (req, res) => {
  res.render('login'); // Render the login.handlebars view
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
}));

// Include other authentication routes here

module.exports = router;
