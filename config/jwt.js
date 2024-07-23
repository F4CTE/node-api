import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();

const generateToken = (id, email, isAdmin) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '24h',
    });
};

export default generateToken;
