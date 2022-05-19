exports.getCompetencias = (connection, req, res) => {
    connection.query('SELECT * FROM COMPETENCIAS', (err, results, fields) => {
        if (err) {
            res.status(500).send('Ocurrió un error al intentar obtener las competencias.');
        } else {
            res.status(200).send(results);
        }
    })
}