const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Student routes
router.get('/students', (req, res) => {
  Student.find({}, (err, students) => {
    if (err) console.error(err);
    res.render('students/list', { students });
  });
});

router.get('/students/add', (req, res) => {
  res.render('students/add');
});

// Include other student routes here

module.exports = router;