const express = require('express');

const {
	getAllTraining,
	getTrainigById,
	updateTraining,
	createTrainig,
	deleteTrainig
} = require('../controllers/Training.controller');


const trainingRoutes = express.Router();

trainingRoutes.get( '/:id', getTrainigById );

trainingRoutes.get( '/', getAllTraining );

trainingRoutes.post( '/', createTrainig );

trainingRoutes.patch('/:id',updateTraining)

trainingRoutes.delete( '/:id', deleteTrainig );

module.exports = { trainingRoutes}