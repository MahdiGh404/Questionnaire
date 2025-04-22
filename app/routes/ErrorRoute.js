const router = require('express').Router()
const ErrorController = require('../http/controller/ErrorContrtoller')

router.post('/addClientError', ErrorController.addClientError)

module.exports = router
