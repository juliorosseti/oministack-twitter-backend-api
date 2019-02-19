const jwt        = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = (req, res, next) => {

    const authHeader = req.headers.authorization;

    try {

        if (!authHeader)
            throw('No token provided');

        const parts = authHeader.split(' ');

        if (!parts.length == 2)
            throw('Token error');

        const [ scheme, token ] = parts;

        if (!/^Bearer$/i.test(scheme))
            throw('Token malformatted');

        jwt.verify(token, authConfig.secret, (err, decoded) => {
            if (err)
                throw('Token invalid');

            req.user_id = decoded.id;
        });

        return next();
    } catch(err)
    {
        return res.status(401).send({ error: err });
    }
}