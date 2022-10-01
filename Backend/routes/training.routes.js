const express = require('express');

const {
	getAllTraining,
	getTrainigById,
	updateTraining,
	createTrainig,
	deleteTrainig
} = require('../controllers/Training.controller');


const usersRouter = express.Router();

usersRouter.get( '/trainings/:id', getTrainigById );

usersRouter.post( '/trainings', getAllTraining );

usersRouter.post( '/trainings', createTrainig, updateTraining );

usersRouter.patch( '/trainings/:id', deleteTrainig );

