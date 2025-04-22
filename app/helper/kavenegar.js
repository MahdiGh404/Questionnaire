const axios = require('axios')
const SMSModel = require('../models/SMS')
var Kavenegar = require('kavenegar');

async function sendKavenegar(phoneNumber, code, template, senderType = 'auto') {
    const token = '6F73503064357132324A6A4972336B4F7937514E4F73616F697A7A43563552787A31665A706C6A714D32343D';
    const sms = new SMSModel();
    const result = await axios.get(`https://api.kavenegar.com/v1/${token}/verify/lookup.json?receptor=${phoneNumber}&token=${code}&template=${template}`);

    sms.receptor = result.data.entries[0].receptor;
    sms.sender = result.data.entries[0].sender;
    sms.messageId = result.data.entries[0].messageid;
    sms.message = result.data.entries[0].message;
    sms.cost = result.data.entries[0].cost;
    sms.retStatus = result.data.entries[0].status;
    sms.retMessage = result.data.entries[0].message;
    sms.sendType = senderType;
    sms.save();
    return result.data.entries[0];
}


module.exports = {sendKavenegar};


