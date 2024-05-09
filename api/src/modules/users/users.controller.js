const usersService = require("./users.service");

const findAll = async (req, res) => {
  res.send(await usersService.findAll());
};
const findById = async (req, res) => {
  res.send(await usersService.findById(req.params.userID));
};

const createUser = async (req, res) => {
  res.send(await usersService.createUser(req));
};

const deleteUser = async (req, res) => {
  res.send(await usersService.deleteUser(req.params.userID));
};

const updateUser = async (req, res) => {
  res.send(await usersService.updateUser(req.params.userID, req.body));
};

module.exports = {
  findAll,
  findById,
  createUser,
  deleteUser,
  updateUser,
};
