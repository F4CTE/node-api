import jwt from 'jsonwebtoken'
import User from '../models/User'
import dotenv from 'dotenv'

dotenv.config()
async function auth(req, res, next) {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) return res.status(401).send('Access denied. No token provided.');

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

        if (!user) {
            throw new Error()
        }

        req.token = token
        req.user = user
        next();
    } catch (ex) {
        res.status(401).send({ error: 'Please authenticate.' });
    }
}

export default auth;