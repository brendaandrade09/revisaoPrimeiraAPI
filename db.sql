SHOW DATABASES;
CREATE DATABASE turmads1b;
CREATE TABLE alunos(
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
curso VARCHAR(100) NOT NULL
);
SHOW TABLES;
SELECT * FROM alunos;
INSERT INTO alunos (nome, curso)
VALUES ('Meel', 'Direito'),
('Matt', 'Mecatrônica'),
('Jack', 'Administração'),
('Luk', 'Desenvolvimento de sistemas');
SELECT * FROM alunos WHERE id = 3;