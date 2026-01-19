const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    try {
        
    } catch (e) { res.status(401).send({ error: 'Auth failed' }); }

};
