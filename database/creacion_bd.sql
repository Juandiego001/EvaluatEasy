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
    estado INTEGER NOT NULL DEFAULT 1
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
    fechaAsignacion DATETIME NOT NULL,
    fechaFinalizacion DATETIME NULL,
    CONSTRAINT fK_usuarios3 FOREIGN KEY (correo_usuario_gerente) REFERENCES USUARIOS(correo) ON DELETE CASCADE,
    CONSTRAINT fK_usuarios4 FOREIGN KEY (correo_usuario_trabajador) REFERENCES USUARIOS(correo) ON DELETE CASCADE
);

CREATE TABLE COMPETENCIAS(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_evaluacion INTEGER NOT NULL,
    nombre VARCHAR(200) NOT NULL,
    descripcion VARCHAR(1000) NOT NULL,
    letraA VARCHAR(1000) NOT NULL,
    letraB VARCHAR(1000) NOT NULL,
    letraC VARCHAR(1000) NOT NULL,
    letraD VARCHAR(1000) NOT NULL,
    CONSTRAINT fk_evaluaciones1 FOREIGN KEY (id_evaluacion) REFERENCES EVALUACIONES(id) ON DELETE CASCADE
);

CREATE TABLE VALORACIONES(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_competencia INTEGER NOT NULL,
    quien INTEGER NOT NULL,
    letra VARCHAR(1) NOT NULL DEFAULT 'A',
    CONSTRAINT fk_competencias1 FOREIGN KEY (id_competencia) REFERENCES COMPETENCIAS(id) ON DELETE CASCADE
);

CREATE TABLE VALORACIONES_FINALES(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_competencia INTEGER NOT NULL,
    quien INTEGER NOT NULL,
    letra VARCHAR(1) NOT NULL DEFAULT 'A',
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

-- Inserción de evaluación
INSERT INTO EVALUACIONES(correo_usuario_gerente, correo_usuario_trabajador, fechaAsignacion) 
    VALUES('gerente1', 'operario', '2022-05-19 00:00:00');

-- Inserción de competencias
INSERT INTO COMPETENCIAS(id_evaluacion, nombre, descripcion, letraA, letraB, letraC, letraD)
    VALUES(3, 'Orientación al cliente', 
        -- Descripción
        'Se esfuerza por conocer y resolver las necesidades de los clientes, 
        demuestra iniciativas para desarrollar excelentes  relaciones con clientes internos y externos. 
        Logra la satisfacción de las necesidades del cliente de forma acertada y oportuna ofreciendo valor 
        agregado y un balance costo-beneficio.', 
        -- LetraA
        'Se responsabiliza personalmente por responder de manera inmediata y sin excusas las 
        dificultades de su cliente.',
        -- LetraB
        'Es modelo en la ejecución de decisiones asociadas con la calidad y cumplimiento en la entrega 
        del servicio al cliente.',
        -- LetraC
        'Crea, rediseña e implementa procesos para lograr la excelencia en la atención al cliente.',
        -- LetraD
        'Entabla una relación con el cliente con perspectivas a largo plazo para resolver sus necesidades.'
        );