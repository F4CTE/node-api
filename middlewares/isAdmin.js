import dotenv from 'dotenv'

dotenv.config()
async function isAdmin(req, res, next) {
    if (!req.user.isAdmin) {
        res.status(403).send({ error: 'Forbidden' });
    }else {
        next()
    }
}

export default isAdmin;