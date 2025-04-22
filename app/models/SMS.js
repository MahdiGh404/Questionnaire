const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SMSSchema = new Schema({
    messageId: {
        type: String,
        required: 'Enter a title',
        index: true
    },
    receptor: {
        type: String,
        required: 'Enter a description'
    },
    message: {
        type: String
    },
    retStatus: { type: String },
    retMessage: {
        type: String
    },
    sender: String,
    cost: Number,
    sendType: {
        type: String,
        enum: ['auto', 'manual'],
        default: 'auto'
    }
}, { timestamps: true });
const SMS = mongoose.model('pey-SMS', SMSSchema);

module.exports = SMS;
