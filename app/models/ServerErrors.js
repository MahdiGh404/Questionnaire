const mongoose = require('mongoose')

const ErrorSchema = new mongoose.Schema({
    message: {type: String},
    number: {type: Number, default: 0}
}, {timestamps: true})

const ServerErrors = mongoose.model('pey-ServerErrors', ErrorSchema, 'pey-serverErrors')
module.exports = ServerErrors;
