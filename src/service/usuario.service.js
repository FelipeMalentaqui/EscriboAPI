const usuarioModel = require('../model/usuario.model');

const getAll = async () => {
  const usuarios = await usuarioModel.getAll();
 return usuarios;
};

const findById = async (id) => {
  const userId = await usuarioModel.findById(id);

  return userId;
};

const verifyEmail = async (email) => {
  const exitEmail = await usuarioModel.verifyEmail(email);

  return exitEmail !== 0;
};
// eslint-disable-next-line max-params
const create = async (nome, email, senha, telefoneNumero, telefoneDdd) => {
  const exit = await verifyEmail(email);

  if (exit) {
    return { error: 'E-mail já existente!' };
  }
  const newUser = await usuarioModel.create(nome, email, senha, telefoneNumero, telefoneDdd);

  return newUser;
};

const update = async (nome, email, senha, id) => {
  const userId = await usuarioModel.update(nome, email, senha, id);
  
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
  verifyEmail,
};