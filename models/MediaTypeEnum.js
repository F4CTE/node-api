import mongoose from 'mongoose'
const mediaTypeEnum = ['Movie', 'Serie'];

const MediaType = mongoose.model('MediaType', new mongoose.Schema({
    type: { type: String, enum: mediaTypeEnum }
}));

export default MediaType;