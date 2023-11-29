const connection = require('../db/connection');

const getAll = async () => {
  const [usuarios] = await connection.execute(
    'SELECT * FROM usuarios.users',
  );
  return usuarios;
};

const findById = async (id) => {
  const [[usuario]] = await connection.execute(
    'SELECT * FROM usuarios.users WHERE id = ?',
    [id],
  );

  return usuario;
};

const verifyEmail = async (email) => {
  const [usuario] = await connection.execute(
    'SELECT * FROM usuarios.users WHERE email = ?',
    [email],
  );

  return usuario;
};

const create = async (nome, email, senha) => {
  // const { numero, ddd } = telefone;
  const [{ insertId }] = await connection.execute(
    'INSERT INTO usuarios.users (nome, email, senha) VALUES(?,?,?)',
    [nome, email, senha],
  );

  return { Id: insertId };
};

const update = async (nome, email, senha, id) => {
  const [{ affectedRows }] = await connection.execute(
    'UPDATE usuarios.users SET nome = ?, email = ?, senha = ? WHERE id = ?',
    [nome, email, senha, id],
  );
  return affectedRows;
};

const userDelete = async (id) => {
  console.log('ID VINDO DA SERVICE: ', id);
  const [{ affectedRows }] = await connection.execute(
    'DELETE FROM usuarios.users WHERE id = ?',
    [id],
  );

  return affectedRows;
};

module.exports = {
  getAll,
  findById,
  create,
  update,
  userDelete,
  verifyEmail,
};
