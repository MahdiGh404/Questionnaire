const ErrorModel = require('../../models/ClientErrors')

class ErrorController {
    async addClientError(req, res) {
        try {
            const em = new ErrorModel({
                message: req.body.message
            })
            await em.save()
            res.send({ success: true, result: 'خطا از سمت کاربر' })
        }
        catch {
            res.send({ success: false, result: 'خطای سمت سرور' })
        }
    }
}

module.exports = new ErrorController
