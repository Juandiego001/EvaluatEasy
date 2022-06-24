'use strict';

module.exports = function (app, connection) {
    const cValoracionesFinales = require('../controllers/valoracionesFinales.controller')

    app.route('/valoraciones-finales')

        .get((req, res) => {
            cValoracionesFinales.getValoracionesFinales(connection, req, res);
        })
}