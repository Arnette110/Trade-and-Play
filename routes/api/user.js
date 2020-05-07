const express = require('express')
const userRouter = express.Router()
const passport = require('passport')
require('../../passport')
const JWT = require('jsonwebtoken')
const User = require('../../models/users')

const signToken = userID => {
  return JWT.sign(
    {
      iss: 'tradeandplay',
      sub: userID
    },
    'tradeandplay',
    { expiresIn: '1h' }
  )
}

userRouter.post('/register', (req, res) => {
  const { username, password, role } = req.body
  User.findOne({ username }, (err, user) => {
    if (err) {
      res
        .status(500)
        .json({ message: { msgBody: 'Error has occured', msgError: true } })
    }
    if (user) {
      res
        .status(400)
        .json({
          message: { msgBody: 'Username is already taken', msgError: true }
        })
    } else {
      const newUser = new User({ username, password, role })
      newUser.save(err => {
        if (err) {
          res
            .status(500)
            .json({
              message: { msgBody: 'Error has occured', msgError: true }
            })
        } else {
          res
            .status(201)
            .json({
              message: {
                msgBody: 'Account successfully created',
                msgError: false
              }
            })
        }
      })
    }
  })
})

userRouter.post(
  '/login',
  passport.authenticate('local', { session: false }),
  (req, res) => {
    if (req.isAuthenticated()) {
      const { _id, username, role, bio, favoriteTeam } = req.user
      const token = signToken(_id)
      res.cookie('access_token', token, { httpOnly: true, sameSite: true })
      res.status(200).json({ isAuthenticated: true, user: { username, role, _id, bio, favoriteTeam } })
    }
  }
)

userRouter.get(
  '/logout',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.clearCookie('access_token')
    res.json({ user: { username: '', role: '' }, success: true })
  }
)

userRouter.get(
  '/authenticated',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { _id, username, role, bio, favoriteTeam } = req.user
    res.status(200).json({ isAuthenticated: true, user: { _id, username, role, bio, favoriteTeam } })
  }
)

userRouter.post('/', (req, res) => {
  User.findOneAndUpdate({ _id: req.body._id }, { $set: { favoriteTeam: req.body.favoriteTeam, bio: req.body.bio } })
}
)
module.exports = userRouter
