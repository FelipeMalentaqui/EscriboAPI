CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        senha VARCHAR(255) NOT NULL,
        telefone_numero VARCHAR(20) NOT NULL,
        telefone_ddd VARCHAR(5) NOT NULL
      )