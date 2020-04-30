var express = require('express')

var router = express.Router()

const passport = require('../config/passport')
const db = require('../models')

// Login route
router.post('/signup', passport.authenticate('local'), function (req, res) {
  res.json(req.user)
})

// Signup page post route
router.post('/api/signup', function (req, res) {
  console.log(req.body)

  db.Users.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
    .then(() => {
      res.redirect('/collections')
    })
    .catch(err => {
      res.status(401).json(err)
    })
})

// Logs out user
router.get('/logout', function (req, res) {
  req.logout()
  res.redirect('/')
})

module.exports = router
