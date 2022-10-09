const express = require('express');

const {
	getAllTraining,
	getTrainigById,
	updateTraining,
	createTrainig,
	deleteTrainig
} = require('../controllers/training.controller');


const trainingRoutes = express.Router();

trainingRoutes.get( '/trainings/:id', getTrainigById );

trainingRoutes.post( '/trainings', getAllTraining );

trainingRoutes.post( '/trainings', createTrainig, updateTraining );

trainingRoutes.patch( '/trainings/:id', deleteTrainig );

module.exports = { trainingRoutes}