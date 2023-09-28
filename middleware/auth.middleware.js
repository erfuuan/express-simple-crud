// simport CRYPTOGRAPHY from '../functions/cryptography.js';
import responseBuilder from '../functions/responseBuilder.js';
import jwt from 'jsonwebtoken';
import Service from '../service/index.js';

export default async (req, res, next) => {
        // Gather the jwt access token from the request header
        const token = req.headers["authorization"].trim()
        if(!token){return responseBuilder.unauthorized(res)}
        // if (token == null) return responseBuilder.unauthorized(res) ; // if there isn't any token
        var saltToken = "12345678" 
        jwt.verify(token, saltToken, (err, verifiedJWT) => {
            console.log(new Date());
            if (err) {
                console.log(err);
                return res.status(403).send("Your token is expired!");
            }
            req.userId = verifiedJWT.username;
            return next();
        })
};
