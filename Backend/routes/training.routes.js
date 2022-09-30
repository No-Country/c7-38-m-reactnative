const express = require('express');

const {
	getAllTraining,
	getTrainigById,
	createTrainig,
	deleteTrainig
} = require('../controllers/Training.controller');


const usersRouter = express.Router();

usersRouter.post('/trainings/:id', getTrainigById);

usersRouter.post('/trainings', getAllTraining);

usersRouter.post('/trainings', createTrainig);

usersRouter.patch('/trainings/:id', deleteTrainig);

