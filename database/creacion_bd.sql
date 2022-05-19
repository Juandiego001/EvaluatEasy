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

CREATE TABLE COEVALUACIONES(
    id INTEGER NOT NULL AUTO INCREMENT,
    id_usuario INTEGER NOT NULL,
    fechaAsignacion DATE NOT NULL,
    fechaFinalizacion DATE NULL,
    CONSTRAINT fK_users1 FOREIGN KEY id_usuario REFERENCES FROM USUARIOS(id)
);


CREATE TABLE EVALUACIONES(
id INTEGER NOT NULL AUTO INCREMENT,
    id_usuario INTEGER NOT NULL,
    fechaAsignacion DATE NOT NULL,
    fechaFinalizacion DATE NULL,
    CONSTRAINT fK_users2 FOREIGN KEY id_usuario REFERENCES FROM USUARIOS(id)
);

CREATE TABLE COMPETENCIAS(
    
);

CREATE TABLE VALORACIONES(
    id INTEGER NOT NULL AUTO INCREMENT,
    letra VARCHAR(1) NULL DEFAULT 'A',
    id_competencia INTEGER NOT NULL,
    CONSTRAINT fk_competencias1 FOREIGN KEY id_competencia REFERENCES FROM COMPETENCIAS(id)
);

CREATE TABLE VALORACIONES_FINALES(
    id INTEGER NOT NULL AUTO INCREMENT,
    deTrabajador VARCHAR(1) NULL DEFAULT 'A',
    deGerente VARCHAR(1) NULL DEFAULT 'A',
    id_competencia INTEGER NOT NULL,
    CONSTRAINT fk_competencias2 FOREIGN KEY id_competencia REFERENCES FROM COMPETENCIAS(id)
);


-- Si no quieren crear de nuevo todas las tablas, a continuación algunos ALTER TABLE que programé
ALTER TABLE USUARIOS MODIFY COLUMN estado INTEGER NULL DEFAULT 1; 

-- Inserción de un usuario GERENTE
INSERT INTO USUARIOS VALUES('gerente@hotmail.com', '123', 'prueba 1', 'prueba 1', 'prueba1', 1);

-- Inserción de un usuario AUXILIAR
INSERT INTO USUARIOS VALUES('auxiliar@hotmail.com', '123', 'prueba 1', 'prueba 1', 'prueba1', 2);

-- Inserción de un usuario OPERARIO
INSERT INTO USUARIOS VALUES('prueba@hotmail.com', '123', 'prueba 1', 'prueba 1', 'prueba1', 3);