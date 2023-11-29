CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        senha VARCHAR(255) NOT NULL
      );

INSERT INTO usuarios.users (id, nome, email, senha)
VALUES
    (1, 'Felipe Medeiros', 'malentaqui.felipe@gmail.com', '123456'),
    (2, 'Bruno Medeiros', 'malentaqui.bruno@gmail.com', '123123');