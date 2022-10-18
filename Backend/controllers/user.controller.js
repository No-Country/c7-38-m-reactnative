//const {Profile} = require('../Profile/profile')
const { userSchema } = require ('../Login/models/user')
//const { Training} = require('../Training/models/training')

 
const getAllUsers =    (async (req, res, next) => {

  const users = await userSchema.findAll({ where:{ status:'active'}});
		/* include: [
		{ model: Profile, include: { model: Training, include: Progress } },
	 		
  ], */
  res.status(200).json({
      status: "success",
      data: {users},
    });

	 });

const createUser = (async (req, res, next) => {

  const { name, email, password } = req.body;

  const newUser = await userSchema.create({
    name,
    email,
    password,
  });

  /* if (userExists) {
    return next(new ('Email already taken'));
  } */
  res.status(201).json({
    status: "success",
    data: { newUser },
  });

});

const getUserById = async (req, res, next) => {

  const { id } = req.params;
  const user = await userSchema.findOne({ where: {id} }); 
  res.status(200).json({
    status: "success",
    data: { user },
  });
};


const updateUser = async (req, res, next) => {

  const { name } = req.body;

  const{ id }= req.params;

  const user = await userSchema.findOne( { where: { id } });

  await user.update({name})

  res.status(204).json({ status: "success", data: { user } });
};

 const deleteUser = async (req, res, next) => {

  const { id } = req.params;

  const user = await userSchema.findOne ({ where: { id } });

  await user.update({status:'deleted'})

  res.status(204).json({ status: "success" });

};
 

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
