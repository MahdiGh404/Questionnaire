const router = require('express').Router()
const KhaniController = require('../http/controller/KaniContrtoller')

router.post('/save', KhaniController.SaveQuestionnaire)

module.exports = router
