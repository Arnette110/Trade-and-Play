const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const routes = require('./routes')
const userRouter = require('./routes/api/user')

const PORT = process.env.PORT || 3001

app.use(cookieParser()) // read cookies (needed for auth)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/tradeandplay', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})

app.use('/user', userRouter)

app.use(routes)
// // Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})
