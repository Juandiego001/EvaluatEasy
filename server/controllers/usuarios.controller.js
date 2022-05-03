
exports.logIn = (connection, req, res) => {

    let correo = req.query.correo;
    let contrasena = req.query.contrasena;

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