CREATE TABLE usuarios (
    id INT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    telefone_numero VARCHAR(20) NOT NULL,
    telefone_ddd VARCHAR(5) NOT NULL
);


INSERT INTO usuarios.users (id, nome, email, senha, telefone_numero, telefone_ddd)
VALUES
    (1, 'Felipe Medeiros', 'malentaqui.felipe@gmail.com', '123456', '987654321', '18'),
    (2, 'Bruno Medeiros', 'malentaqui.bruno@gmail.com', '123123', '0000000', '18');



INSERT INTO usuarios.users (id, nome, email, senha)
VALUES
    (1, 'Felipe Medeiros', 'malentaqui.felipe@gmail.com', '123456'),
    (2, 'Bruno Medeiros', 'malentaqui.bruno@gmail.com', '123123');

