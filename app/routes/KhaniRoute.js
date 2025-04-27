const router = require('express').Router()
const KhaniController = require('../http/controller/KaniContrtoller')

router.post('/save', KhaniController.SaveQuestionnaire)
router.get('/', KhaniController.GetAllQuestionnaire)

router.get ('/table', KhaniController.RenderQuestionnairesTable)

module.exports = router
