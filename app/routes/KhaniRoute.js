const router = require('express').Router()
const KhaniController = require('../http/controller/KaniContrtoller')

router.post('/save', KhaniController.SaveQuestionnaire)
router.get('/', KhaniController.GetAllQuestionnaire)

module.exports = router
