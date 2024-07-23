import express from 'express'
import * as movieController from '../controllers/mediaController.js'
import {authUser} from "../controllers/userController.js";
import isAdmin from "../middlewares/isAdmin.js";
import auth from "../middlewares/auth.js";

const router = express.Router();


/**
 * @swagger
 * /api/media:
 *   post:
 *     summary: create a movie
 */
router.post('/api/media', auth, isAdmin, movieController.createMedia);

/**
 * @swagger
 * /api/media:
 *   get:
 *     summary: Retrieve a list of movies
 */
router.get('/api/media', movieController.getMedias)

/**
 * @swagger
 * /api/media/{id}:
 *   get:
 *     summary: Retrieve a movie by id
 */
router.get('/api/media/:id', movieController.getMediaById);

/**
 * @swagger
 * /api/media/{id}:
 *   put:
 *     summary: Update a movie
 */
router.put('/api/media/:id', auth, isAdmin, movieController.updateMedia);

/**
 * @swagger
 * /api/media/{id}:
 *   delete:
 *     summary: delete a movie
 */
router.delete('/api/media/:id', auth, isAdmin, movieController.deleteMedia);

export default router