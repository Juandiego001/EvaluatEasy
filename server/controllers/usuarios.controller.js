
exports.logIn = (connection, req, res) => {

    let correo = req.query.correo;
    let contrasena = req.query.contrasena;

    //PTT: Muchachos esto genial para la materia pero como consejo para cuando esten trabajando  nunca lo hagan mantenga esto separado de el fornt por 
    // cuestiones de seguridad y por que son sumamente vulnerables a SQL injection aqui de hecho ya tienen una aplicacion totlamente insegura y en especial 
    // con los datos que se plantea manejar aqui
    connection.query('SELECT nombres, apellidos, tipo FROM USUARIOS WHERE correo = ? AND contrasena = ?', [
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
                        tipo: results[0].tipo
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

    
    console.log(req);

    let correo = req.body.correo;
    let contrasena = req.body.contrasena;
    let nombres = req.body.nombres;
    let apellidos = req.body.apellidos;
    let cargo = req.body.cargo;
    let tipo = req.body.tipo;
    let telefono = req.body.telefono;
    

    connection.query('INSERT INTO USUARIOS VALUES(?, ?, ?, ?, ?, ?, ?)', [
            correo, contrasena, nombres, apellidos, cargo, tipo, telefono
        ], (error, resultados, campos) => {
            if (error) {
                console.log(error);
                res.status(500).send('Ocurrió un error');
            } else {
                res.status(200).send({creacion: true});
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
            res.status(200).send(results);
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