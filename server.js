
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const flash = require('connect-flash')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const routes = require('./routes')

const PORT = process.env.PORT || 3001

require('./config/passport')(passport)

app.use(cookieParser()) // read cookies (needed for auth)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

app.use(
  session({ resave: false, saveUninitialized: true, secret: 'secretsession' })
) // session secret
app.use(passport.initialize())
app.use(passport.session()) // persistent login sessions
app.use(flash())

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/tradeandplay', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})

require('./routes/api/userAuth')(app, passport)
app.use(routes)
// // Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})
