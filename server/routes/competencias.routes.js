'use strict';

module.exports = function (app, connection) {

    const cCompetencias = require('../controllers/competencias.controller');

    app.route('/competencias')

        .get((req, res) => {
            cCompetencias.getCompetencias(connection, req, res);
        })

}