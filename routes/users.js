import express from 'express'
import * as userController from '../controllers/userController.js'

const router = express.Router();

/**
 * @swagger
 * /api/users/auth:
 *   post:
 *     summary: authenticate using credentials
 */
router.post('/auth' , userController.authUser);

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: register a user
 */
router.post('/register', userController.registerUser);

/**
 * @swagger
 * /api/users/:
 *   get:
 *     summary: Retrieve a list of all users
 */
router.get('/', userController.getAllUsers)

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Retrieve a user by its id
 */
router.get('/:id', userController.getUserById);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: update a user
 */
router.put('/:id', userController.updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: delete a user
 */
router.delete('/:id', userController.deleteUser);

export default router