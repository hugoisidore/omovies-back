import express from 'express';
import moviesController from '../../controllers/movies-controller.js'

const router = express.Router();

router.get('/movies', moviesController.getMoviesById );

export default router;