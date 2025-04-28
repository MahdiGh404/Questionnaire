const router = require("express").Router()
const ErrorRoute = require('./ErrorRoute')
const KhaniRoute = require('./KhaniRoute')


router.use('/Error', ErrorRoute)
router.use('/Questionnaire', KhaniRoute)

module.exports = router;
