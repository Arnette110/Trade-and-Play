module.exports = function (req, res, next) {
  if (req.user) {
    return next()
  }

  return res.redirect('/')
}
