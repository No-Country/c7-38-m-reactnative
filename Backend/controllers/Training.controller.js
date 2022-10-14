const userSchema = require('../Login/models/user');
const trainingSchema = require('../Training/models/training')

//const { Training } = require('../Training/models/training');
//const { Progress } = require('../Progress/models/progress')


const getAllTraining = (async (req, res, next) => {
   
	const trainings = await trainingSchema.findAll({
		where: { status: 'active' },
		include: [{ model: Progress, include:{ model : userSchema} }],
	});

	res.status(200).json({
		status: 'success',
		data: { trainings },
	});

	
});

const getTrainigById = (async (req, res, next) => {
	const { training } = req;

	res.status(200).json({
		status: 'success',
		data: { training },
	});
});

const createTrainig = (async (req, res, next) => {
	const { nameTraining, category } = req.body;

	const newTraining = await trainingSchema.create({
		nameTraining,
		category,
		
	});

	res.status(200).json({
		status: 'success',
		data: { newTraining },
	});
});

const updateTraining = (async (req, res, next) => {
	const { nameTraining, category } = req.body;
	const { training } = req;

	await training.update({ nameTraining, category });

	res.status(204).json({ status: 'success' });
});

const deleteTrainig = (async (req, res, next) => {
	const { training } = req;

	await training.update({ status: 'deleted' });
 
	res.status(204).json({
		status: 'success',
	});
});

module.exports = {
	getAllTraining,
	getTrainigById,
	updateTraining,
	createTrainig,
	deleteTrainig,
};