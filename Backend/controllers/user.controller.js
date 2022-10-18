const userSchema = require ('../Login/models/user')

 
const getAllUsers =    (async (req, res, next) => {

  const users = await userSchema.findAll({ where:{ status:'active'}});
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
