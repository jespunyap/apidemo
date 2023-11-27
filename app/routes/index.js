var router = require('express').Router()
  var generic = require('./generic')

  router.use('/generic', generic)

  router.get('/', function (req, res) {
    res.status(200).json({ message: 'Estàs connectat a la nostra API' })
  })

  module.exports = router