module.exports = (app, connection) => {

    const cUsuarios = require('../controllers/usuarios.controller.js');

    app.route('/usuarios')

        // Iniciar sesión
        .get((req, res) => {
            cUsuarios.logIn(connection, req, res);
        })

        .post((req, res) => {

        })

}