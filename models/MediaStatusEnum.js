import mongoose from 'mongoose'

const mediaStatusEnum = ['à voir', 'vu', 'en cours'];

const MediaStatus = mongoose.model('MovieStatus', new mongoose.Schema({
    status: { type: String, enum: mediaStatusEnum }
}));

export default MediaStatus;