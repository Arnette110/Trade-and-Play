// const crypto = require("crypto");
// const async = require("async");
// const nodemailer = require("nodemailer");
// var User = require("./models/users");

module.exports = function (router, passport) {
  router.post(
    '/login',
    passport.authenticate('local-login', {
      successRedirect: '/collection', // redirect to the secure profile section
      failureRedirect: '/login' // redirect back to the signup page if there is an error
      // failureFlash: true // allow flash messages
    })
  )

  router.post(
    '/signup',
    passport.authenticate('local-signup', {
      successRedirect: '/login',
      // failureFlash: true,
      failureRedirect: '/signup'
    })
  )

  router.get('/dashboard', isLoggedIn, function (req, res) {

  })

  router.get('/logout', function (req, res) {
    req.logout()
    res.redirect('/')
  })
}

function isLoggedIn (req, res, next) {
  if (req.isAuthenticated()) return next()

  res.redirect('/login', {
    message: req.flash('signupMessage')
  })
}
