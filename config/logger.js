import morgan from 'morgan'
import fs from 'fs'
import path from 'path'

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

const logger = morgan('combined', { stream: accessLogStream });

export default logger;