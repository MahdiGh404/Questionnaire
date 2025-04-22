const mongoose = require('mongoose');

const MediaSchema = new mongoose.Schema({
    address: {type: String, required: 'خطا در بارگذاری فایل'},
    type: {type: String},
    originalFileName: {type: String},
    kind: {type: String}
}, {timestamps: true})

const Media = mongoose.model('pey-Media', MediaSchema, 'pey-media')
module.exports = Media;
