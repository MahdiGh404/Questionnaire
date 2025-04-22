const winston = require("winston");

module.exports = (error, req, res, next) => {
    winston.error(error.toString(), error)
    return res.json({"success": false, result: "خطای بنیادی از سمت سرور"})
}