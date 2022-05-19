exports.getValoracionesFinales = (connection, req, res) => {
    let idCompetencia = req.query.idCompetencia;

    connection.query('SELECT * FROM VALORACIONES_FINALES WHERE id_competencia = ?', [idCompetencia], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.status(500).send('Ocurrió un error al intentar obtener las valoraciones finales de una competencia');
        } else {
            res.status(200).send(results);
        }
    })
}