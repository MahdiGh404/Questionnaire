const ServerErrorModel =require('../models/ServerErrors')

const addErrorLog = async (req, res, err, send, customMessage = '') => {
    try {
        const em = new ServerErrorModel({
            message: err
        })
        await em.save()
        console.log(err)
        res.send({ success: false, result: send ? err : customMessage === '' ? 'خطا از سمت سرور' : customMessage })
    }
    catch {
        res.send({ success: false, result: 'خطای بنیادی سمت سرور' })
    }
}

module.exports = addErrorLog
