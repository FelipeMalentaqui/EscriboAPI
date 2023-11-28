const usuarioModel = require('../model/usuario.model');

const getAll = async () => {
  const usuarios = await usuarioModel.getAll();
 return usuarios;
};

const findById = async (id) => {
  const userId = await usuarioModel.findById();
  // console.log(userId);

  const oneUser = await userId.find((user) => user.id === Number(id));

  // console.log(oneUser);

  return oneUser;
};

const create = async (user) => {
  const newUser = await usuarioModel.create(user);

  return newUser;
};

const update = async (id, nome, email, senha) => {
  const userId = await usuarioModel.update(id);
  
  userId.nome = nome;
  userId.email = email;
  userId.senha = senha;
  console.log(userId, 'USERID');
  return userId;
};

const userDelete = async (id) => {
  const deleteUser = await usuarioModel.userDelete(id);

  return deleteUser;
};

module.exports = {
  getAll,
  findById,
  create,
  update,
  userDelete,
};