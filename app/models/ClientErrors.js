const mongoose = require('mongoose')

const ErrorSchema = new mongoose.Schema({
    message: {type: String},
    number: {type: Number, default: 0}
}, {timestamps: true})

const ClientErrors = mongoose.model('pey-ClientErrors', ErrorSchema, 'pey-clientErrors')
module.exports = ClientErrors;
