const { User } = require('../Login/models/user');
const {Profile} = require('../Profile/profile')
const { Training} = require('../Training/models/training')


const getAllUsers = (async (req, res, next) => {
	 const users = await User.findAll({
		include: [
		{ model: Profile, include: { model: Training, include: Progress } },
	 		
		],
	 });


	res.status(200).json({
		status: 'success',
		data:{users},
	});
});

const createUser = (async (req, res, next) => {
	const { name, email, password } = req.body;

	/* const userExists = await User.findOne({ email });

	if (userExists) {
		return next(new ('Email already taken'));
	}
 */
	const newUser = await User.create({
		name,
		email,
		password,
	});


	res.status(201).json({
		status: 'success',
		data:{newUser},
	});
});

const getUserById = (async (req, res, next) => {
	const { user } = req;

	res.status(200).json({
		status: 'success',
		data:{user},
	});
});

const updateUser = (async (req, res, next) => {
	const { user } = req;
	const { name } = req.body;

	await user.update({ name });

	res.status(204).json({ status: 'success' });
});

const deleteUser = (async (req, res, next) => {
	const { user } = req;

	await user.update({ status: 'deleted' });

	res.status(204).json({ status: 'success' });
});


module.exports = {
	getAllUsers,
	createUser,
	getUserById,
	updateUser,
	deleteUser,
};