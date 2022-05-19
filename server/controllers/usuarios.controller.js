
exports.logIn = (connection, req, res) => {

    let correo = req.query.correo;
    let contrasena = req.query.contrasena;

    //PTT: Muchachos esto genial para la materia pero como consejo para cuando esten trabajando  nunca lo hagan mantenga esto separado de el fornt por 
    // cuestiones de seguridad y por que son sumamente vulnerables a SQL injection aqui de hecho ya tienen una aplicacion totlamente insegura y en especial 
    // con los datos que se plantea manejar aqui
    connection.query('SELECT * FROM USUARIOS WHERE correo = ? AND contrasena = ?', [
        correo, contrasena
    ], (err, results, fields) => {
        if (err) {
            res.status(500).send('Ocurrió un error');
        } else {
            
            if (results[0] != undefined) {
                res.status(200).send(
                    {
                        login: true,
                        nombres: results[0].nombres,
                        apellidos: results[0].apellidos,
                        tipo: results[0].tipo,
                        estado: results[0].estado
                    }
                )
            } else {
                res.status(200).send(
                    {
                        login: false
                    }
                )
            }
        }
    })
}

exports.postUsuarios = (connection, req, res) => {
    let correo = req.body.correo;
    let contrasena = req.body.contrasena;
    let nombres = req.body.nombres;
    let apellidos = req.body.apellidos;
    let cargo = req.body.cargo;
    let tipo = req.body.tipo;
    

    connection.query('INSERT INTO USUARIOS(correo, contrasena, nombres, apellidos, cargo, tipo) ' +
        'VALUES(?, ?, ?, ?, ?, ?)', [
            correo, contrasena, nombres, apellidos, cargo, tipo
        ], (err, results, fields) => {
            if (err) {
                console.log(err);
                res.status(500).send('Ocurrió un error');
            } else {
                res.status(200).send(results);
            }
    })
}

exports.putUsuarios = (connection, req, res) => {
    let nombres = req.body.nombres;
    let apellidos = req.body.apellidos;
    let correoActual = req.body.correo;
    let nuevoCorreo = req.body.nuevoCorreo;
    let contrasena = req.body.contrasena;
    
    connection.query('UPDATE USUARIOS SET nombres = ?, apellidos = ?, correo = ?, contrasena = ? WHERE correo = ?', 
    [nombres, apellidos, nuevoCorreo, contrasena, correoActual],
    (err, results, fields) => {
        if (err) {
            console.log(err);
            res.status(500).send('Ocurrió un error');
        } else {
            // True para indicar que el usuario se ha actualizado con éxito
            res.status(200).send(true);
        }
    })
}

exports.deleteUsuarios = (connection, req, res) => {
    let correo = req.query.correo;

    connection.query('DELETE FROM USUARIOS WHERE correo = ?', [correo], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.status(500).send('Ocurrió un error al intentar eliminar el usuario.');
        } else {
            res.status(200).send(results);
        }
    })
}

exports.getContrasena = (connection, req, res) => {
    let correo = req.query.correo;

    connection.query('SELECT contrasena FROM USUARIOS WHERE correo = ?', [
        correo
    ], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.status(500).send('Ocurrió un error');
        } else {
            res.status(200).send(results);
        }
    })

}

// Obtener todos los trabajadores
exports.getTrabajadores = (connection, req, res) => {
    connection.query('SELECT * FROM USUARIOS WHERE tipo = 3', 
    (err, results, fields) => {
        if (err) {
            console.log(err);
            res.status(500).send('Ocurrió un error al intentar obtener todos los usuarios trabajadores');
        } else {
            let correosArreglados = [];

            for (let i = 0; i < results.length; i++) {
                let correo = {
                    original: results[i].correo,
                    nuevo: results[i].correo
                };
                let contrasena = results[i].contrasena;
                let nombres = results[i].nombres;
                let apellidos = results[i].apellidos;
                let cargo = results[i].cargo;
                let tipo = results[i].tipo;
                let estado = results[i].estado;

                correosArreglados.push({
                    correo,
                    contrasena,
                    nombres,
                    apellidos,
                    cargo,
                    tipo,
                    estado
                });
            }

            res.status(200).send(correosArreglados);
        }
    })
}

exports.postTrabajadores = (connection, req, res) => {

    let correo = req.body.correo;
    let contrasena = req.body.contrasena;
    let nombres = req.body.nombres;
    let apellidos = req.body.apellidos;
    let cargo = req.body.cargo;
    let tipo = 3;

    connection.query('INSERT INTO USUARIOS(correo, contrasena, nombres, apellidos, cargo, tipo) VALUES(?, ?, ?, ?, ?, ?)', 
        [correo, contrasena, nombres, apellidos, cargo, tipo], 
        (err, results, fields) => {
            if (err) {
                console.log(err);
                res.status(500).send('Ocurrió un error al intentar insertar los usuarios trabajadores');
            } else {
                res.status(200).send(results);
            }
        }
    )
}

exports.putTrabajadores = (connection, req, res) => {
    let correo = req.body.correo;
    let nuevoCorreo = req.body.nuevoCorreo;
    let contrasena = req.body.contrasena;
    let nombres = req.body.nombres;
    let apellidos = req.body.apellidos;
    let cargo = req.body.cargo;
    let tipo = req.body.tipo;

    connection.query('UPDATE USUARIOS SET correo = ?, contrasena = ?, nombres = ?, apellidos = ?, cargo = ?,' +
    'tipo = ? WHERE correo = ? ', [
        nuevoCorreo, contrasena, nombres, apellidos, cargo, tipo, correo
    ], (err, results, fields) => {
        if (err) {
            res.status(500).send('Ocurrió un error al intentar actualizar los trabajadores.');
        } else {
            res.status(200).send(results);
        }
    })
}

exports.putEstadoTrabajadores = (connection, req, res) => {
    let correo = req.body.correo;
    let estado = req.body.estado;

    connection.query('UPDATE USUARIOS SET estado = ? WHERE correo = ?', [
        estado, correo
    ], (err, results, fields) => {
        if (err) {
            res.status(500).send('Ocurrió un error al intentar actualizar el estado');
        } else {
            res.status(200).send(results);
        }
    })
}