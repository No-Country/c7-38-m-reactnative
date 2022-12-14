const User = require("../../models/Users/index");

const getUserById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const user = await User.findById(id);
  res.send(user);
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const verify = await User.find({ email: email });
  if (!verify[0]) {
    const newUser = await User.create({
      name,
      email,
      password,
    });
    return res.send(newUser);
  } else {
    res.send("Error user email already exist");
  }
};

const searchUserByEmail = async (req, res) => {
  const { email, password } = req.body;
  const verify = await User.find({ email: email });
  if (verify[0]) {
    if (verify[0].email && verify[0].password == password) {
      return res.send(verify);
    } else {
      return res.json({ message: "password incorrect" });
    }
  } else {
    res.json({ message: "user dont exist" });
  }
};

const updateUser = async (req, res) => {
  const { name, email, idUser } = req.body;
  const user = await User.findByIdAndUpdate(idUser, { name, email });
  res.send(user);
};

module.exports = {
  getUserById,
  createUser,
  searchUserByEmail,
  updateUser,
};
