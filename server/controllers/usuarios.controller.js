
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

    let nombres = req.body.nombres;
    let apellidos = req.body.apellidos;
    let cargo = req.body.cargo;
    let correo = req.body.correo;
    let telefono = req.body.telefono;
    let contrasena = '123';
    let tipo = 3;

    connection.query('INSERT INTO USUARIOS VALUES(?, ?, ?, ?, ?, ?)', [
            correo, contrasena, nombres, apellidos, cargo, tipo
        ], (error, resultados, campos) => {
            if (error) {
                console.log(error);
                res.status(500).send('Ocurrió un error');
            } else {
                res.status(200).send({creacion: true});
            }
    })


}