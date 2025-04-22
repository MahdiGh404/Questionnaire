const ErrorModel = require('../../models/ClientErrors')
const QuestionnaireModel = require("../../models/Questionnaire")

class KhaniController {
    async SaveQuestionnaire(req, res) {
        try {

        } catch {
            res.send({success: false, result: 'خطای سمت سرور'})
        }
    }
}

module.exports = new KhaniController
