-- Creación de la db
CREATE DATABASE evaluateasy;

-- Usamos la db
use evaluateasy;

-- Creación de las tablas
CREATE TABLE USUARIOS(
    correo VARCHAR(100) NOT NULL PRIMARY KEY,
    contrasena VARCHAR(30) NOT NULL,
    nombres VARCHAR(20) NOT NULL,
    apellidos VARCHAR(20) NOT NULL,
    cargo VARCHAR(30) NULL,
    tipo INTEGER NOT NULL,
    estado INTEGER NULL
);

-- Si no quieren crear de nuevo todas las tablas, a continuación algunos ALTER TABLE que programé
ALTER TABLE USUARIOS MODIFY COLUMN estado INTEGER NULL DEFAULT 1; 

-- Inserción de un usuario GERENTE
INSERT INTO USUARIOS VALUES('gerente@hotmail.com', '123', 'prueba 1', 'prueba 1', 'prueba1', 1);

-- Inserción de un usuario AUXILIAR
INSERT INTO USUARIOS VALUES('auxiliar@hotmail.com', '123', 'prueba 1', 'prueba 1', 'prueba1', 2);

-- Inserción de un usuario OPERARIO
INSERT INTO USUARIOS VALUES('prueba@hotmail.com', '123', 'prueba 1', 'prueba 1', 'prueba1', 3);