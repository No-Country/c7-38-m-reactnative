const { User } = require('../Login/models/user');
const { Training } = require('../Training/models/training');
const { Progress } = require('../Progress/models/progress')


const getAllTraining = catchAsync(async (req, res, next) => {
	const trainings = await Training.findAll({
		where: { status: 'active' },
		include: [{ model: Progress }],
	});

	res.status(200).json({
		status: 'success',
		data: { actors },
	});

	
});


exports.createTrainig = (async (req, res, next) => {
	const { nameTraining, category } = req.body;

	const newTraining = await Training.create({
		nameTraining,
		category,
		
	});

	res.status(200).json({
		status: 'success',
		data: { newTraining },
	});
});


const deleteTrainig = (async (req, res, next) => {
	const { training } = req;

	await training.update({ status: 'deleted' });
 
	res.status(204).json({
		status: 'success',
	});
});