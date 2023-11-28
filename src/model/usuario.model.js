const usuarioJson = require('../../usuarios');

const getAll = async () => {
  console.log('model');
  const usuarios = await usuarioJson;
  return usuarios;
};

const findById = async () => {
  const usuario = await usuarioJson;
  console.log('findByid');

  return usuario;
};

const create = async (user) => {
  const usuario = await usuarioJson;

  usuario.push(user);

  return usuario;
};

const update = async (id) => {
  const usuario = await usuarioJson;

  const updateUser = usuario.find((user) => user.id === Number(id));
  console.log(updateUser, 'MODEL USER');
  return updateUser;
};

const userDelete = async (id) => {
  const usuario = await usuarioJson;

  const arrayPosition = usuario.findIndex((user) => user.id === Number(id));

  usuario.splice(arrayPosition, 1);

  return id;
};

module.exports = {
  getAll,
  findById,
  create,
  update,
  userDelete,
};
