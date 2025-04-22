const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
    sanjesh1: Number,
    sanjesh2: Number
}, {timestamps: true});

const UserSchema = new mongoose.Schema({
    name: String,
    sex: Boolean,
    age: Number,
    phone: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, 'can\'t be blank'],
        match: [/^09\d{9}$/, 'is invalid'],
        index: true
    },
    role: {
        type: String,
        default: 'user'
    },
    password: String,
    numberDaily: Number,
    historyQuitting: Number,
    levelMotivation: Number,
    tests: [TestSchema]
}, {timestamps: true})

const User = mongoose.model('pey-User', UserSchema, 'pey-user');
module.exports = User
