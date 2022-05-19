-- Creación de la db
CREATE DATABASE evaluateasy;

-- Usamos la db
use evaluateasy;

-- Dropear tablas ya creadas
DROP TABLE VALORACIONES_FINALES;
DROP TABLE VALORACIONES;
DROP TABLE COMPETENCIAS;
DROP TABLE EVALUACIONES;
DROP TABLE COEVALUACIONES;
DROP TABLE USUARIOS;

-- Creación de las tablas
CREATE TABLE USUARIOS(
    correo VARCHAR(100) NOT NULL PRIMARY KEY,
    contrasena VARCHAR(30) NOT NULL,
    nombres VARCHAR(20) NOT NULL,
    apellidos VARCHAR(20) NOT NULL,
    cargo VARCHAR(30) NULL,
    tipo INTEGER NOT NULL,
    estado INTEGER NULL DEFAULT 1
);

CREATE TABLE COEVALUACIONES(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    correo_usuario_gerente VARCHAR(100) NOT NULL,
    correo_usuario_trabajador VARCHAR(100) NOT NULL, 
    fechaAsignacion DATE NOT NULL,
    fechaFinalizacion DATE NULL,
    CONSTRAINT fk_usuarios1 FOREIGN KEY (correo_usuario_gerente) REFERENCES USUARIOS(correo) ON DELETE CASCADE,
    CONSTRAINT fk_usuarios2 FOREIGN KEY (correo_usuario_trabajador) REFERENCES USUARIOS(correo) ON DELETE CASCADE
);

CREATE TABLE EVALUACIONES(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    correo_usuario_gerente VARCHAR(100) NOT NULL,
    correo_usuario_trabajador VARCHAR(100) NOT NULL,
    fechaAsignacion DATE NOT NULL,
    fechaFinalizacion DATE NULL,
    CONSTRAINT fK_usuarios3 FOREIGN KEY (correo_usuario_gerente) REFERENCES USUARIOS(correo) ON DELETE CASCADE,
    CONSTRAINT fK_usuarios4 FOREIGN KEY (correo_usuario_trabajador) REFERENCES USUARIOS(correo) ON DELETE CASCADE
);

CREATE TABLE COMPETENCIAS(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_evaluacion INTEGER NOT NULL,
    nombre VARCHAR(200) NOT NULL,
    descripcion VARCHAR(1000) NOT NULL,
    CONSTRAINT fk_evaluaciones1 FOREIGN KEY (id_evaluacion) REFERENCES EVALUACIONES(id) ON DELETE CASCADE
);

CREATE TABLE VALORACIONES(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_competencia INTEGER NOT NULL,
    letra VARCHAR(1) NULL DEFAULT 'A',
    CONSTRAINT fk_competencias1 FOREIGN KEY (id_competencia) REFERENCES COMPETENCIAS(id) ON DELETE CASCADE
);

CREATE TABLE VALORACIONES_FINALES(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_competencia INTEGER NOT NULL,
    deTrabajador VARCHAR(1) NULL DEFAULT 'A',
    deGerente VARCHAR(1) NULL DEFAULT 'A',
    CONSTRAINT fk_competencias2 FOREIGN KEY (id_competencia) REFERENCES COMPETENCIAS(id) ON DELETE CASCADE
);

-- Inserción de un usuario GERENTE
INSERT INTO USUARIOS(correo, contrasena, nombres, apellidos, cargo, tipo) 
    VALUES('gerente1', '123', 'Gerente 1', 'Gerente 1', 'Gerente1', 1);

INSERT INTO USUARIOS(correo, contrasena, nombres, apellidos, cargo, tipo) 
    VALUES('gerente2', '123', 'Gerente 1', 'Gerente 1', 'Gerente1', 1);

-- Inserción de un usuario AUXILIAR
INSERT INTO USUARIOS(correo, contrasena, nombres, apellidos, cargo, tipo) 
    VALUES('auxiliar', '123', 'Auxiliar 1', 'Auxiliar 1', 'Auxiliar', 2);

-- Inserción de un usuario OPERARIO
INSERT INTO USUARIOS(correo, contrasena, nombres, apellidos, cargo, tipo) 
    VALUES('operario', '123', 'Operario 1', 'Operario 1', 'Auxiliar', 3);

INSERT INTO USUARIOS(correo, contrasena, nombres, apellidos, cargo, tipo) 
    VALUES('operario2', '123', 'Operario 1', 'Operario 1', 'Auxiliar', 3);