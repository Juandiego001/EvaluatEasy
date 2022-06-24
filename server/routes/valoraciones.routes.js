'use strict';

module.exports = function (app, connection) {
    const cValoraciones = require('../controllers/valoraciones.controller')

    app.route('/valoraciones')

        .get((req, res) => {
            cValoraciones.getValoraciones(connection, req, res);
        })

        .post((req, res) => {
            cValoraciones.postValoraciones(connection, req, res);
        })
}