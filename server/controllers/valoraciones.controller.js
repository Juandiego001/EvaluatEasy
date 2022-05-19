exports.getValoraciones = (connection, req, res) => {
    let idCompetencia = req.query.idCompetencia;

    connection.query('SELECT * FROM VALORACIONES WHERE id_competencia = ?', [idCompetencia], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.status(500).send('Ocurrió un error al intentar obtener las valoraciones de una competencia');
        } else {
            res.status(200).send(results);
        }
    })
}

exports.postValoraciones = (connection, req, res) => {
    let idCompetencia = req.body.idCompetencia;
    let quien = req.body.quien;
    let puntuacion = req.body.puntuacion;

    connection.query('INSERT INTO VALORACIONES(id_competencia, quien, letra) VALUES(?, ?, ?)', [
        idCompetencia, quien, puntuacion
    ], (err, results, fields) => {
        if (err) {
            res.status(500).send('Ocurrió un error al intentar crear las valoraciones');
        } else {
            res.status(200).send(results);
        }
    })
}