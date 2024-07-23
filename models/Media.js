import mongoose from 'mongoose'
import MediaType from "./MediaTypeEnum.js";

const mediaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    video: {
        type: String,
    },
    actors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Actor'
    }],
    mediaType: {
        type: String,
        enum: MediaType,
        required: true
    },
});

const Media = mongoose.model('Media', mediaSchema);

export default Media
