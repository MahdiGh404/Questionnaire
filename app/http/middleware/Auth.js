const jwt = require("jsonwebtoken")
const config = require('config')

const getTokenFromHeader = (req) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token' || req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    }
    return null;

}

module.exports = async function (req, res, next) {
    const token = getTokenFromHeader(req)
    if (!token) return res.send({success: false, result: 'ابتدا در سامانه ما وارد شوید.'})
    try {
        req.user = jwt.verify(token, config.get('jwtPrivateKey'));
        next();
    } catch (e) {
        return res.send({success: false, result: 'شما دسترسی ندارید'})
    }


}
