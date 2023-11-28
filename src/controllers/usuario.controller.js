const usuarioService = require('../service/usuario.service');

const getAll = async (req, res) => {
  const usuarios = await usuarioService.getAll();

  return res.status(200).json(usuarios);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const userId = await usuarioService.findById(id);

  if (!userId) {
    return res.status(404).json({ message: 'usuario não encontrado!' });
  }

  return res.status(200).json(userId);
};

const create = async (req, res) => {
     const user = { ...req.body };

     const newUser = await usuarioService.create(user);

     return res.status(201).json(newUser);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { nome, email, senha } = req.body;

  const updateUser = await usuarioService.update(id, nome, email, senha);

  return res.status(200).json(updateUser);
};

const userDelete = async (req, res) => {
  const { id } = req.params;
  const deleteUser = await usuarioService.userDelete(id);

  return res.status(200).json(deleteUser);
};

module.exports = {
  getAll,
  findById,
  create,
  update,
  userDelete,
};
