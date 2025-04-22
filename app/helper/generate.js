const jwt = require('jsonwebtoken');
const config = require('config');


function generateJWT(model) {
    return jwt.sign({
        id: model._id,
        phone: model.phone,
        role: model.role,
    }, config.get('jwtPrivateKey'))
}

module.exports = {generateJWT}
