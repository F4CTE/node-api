import asyncHandler from 'express-async-handler'
import Media from '../models/Media.js'
import User from "../models/User.js";

const getMedias = asyncHandler(async (req, res) => {
    const medias = await Media.find({});
    res.json(medias);
});

const getMediaById = asyncHandler(async (req, res) => {
    const media = await Media.findById(req.params.id);

    if (media) {
        res.json(media);
    } else {
        res.status(404);
        throw new Error('Media not found');
    }
});

const createMedia = asyncHandler(async (req, res) => {
    const { title, genre, year, description, image, video } = req.body;

    const media = new Media({
        title,
        genre,
        year,
        description,
        image,
        video,
    });

    const createdmedia = await media.save();
    res.status(201).json(createdmedia);
});

const updateMedia = asyncHandler(async (req, res) => {
    const { title, genre, year, description, image, video } = req.body;

    const media = await Media.findById(req.params.id);

    if (media) {
        media.title = title;
        media.genre = genre;
        media.year = year;
        media.description = description;
        media.image = image;
        media.video = video;

        const updatedMedia = await media.save();
        res.json(updatedMedia);
    } else {
        res.status(404);
        throw new Error('Media not found');
    }
});

const deleteMedia = asyncHandler(async (req, res) => {
    const media = await Media.findById(req.params.id);

    if (media) {
        await media.remove();
        res.json({ message: 'Media removed' });
    } else {
        res.status(404);
        throw new Error('Media not found');
    }
});

const addToFavorite = asyncHandler( async (req, res) => {
    const media = await Media.findById(req.params.id);
    req.user.medias.findIndex()
})

export {deleteMedia, updateMedia, createMedia, getMediaById, getMedias}
