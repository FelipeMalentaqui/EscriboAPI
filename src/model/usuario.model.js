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
  const [result] = await connection.execute(
    'SELECT COUNT(*) as count FROM usuarios.users WHERE email = ?',
    [email],
  );
  // console.log('resultado do EMAIL: ', result);
  return result[0].count;
};

const create = async (nome, email, senha, telefoneNumero, telefoneDdd) => {
  try {
    const query = 'INSERT INTO usuarios.users (nome, email, senha, telefone_numero, telefone_ddd) VALUES (?, ?, ?, ?, ?)';

    const values = [nome, email, senha, telefoneNumero || null, telefoneDdd || null];

    const [result] = await connection.query(query, values);

    if (result && result[0] && 'insertId' in result[0]) {
      return { id: result[0].insertId };
    } 
      throw new Error('Erro ao obter o ID do usuário criado.');
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    throw error;
  }
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
