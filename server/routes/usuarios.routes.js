module.exports = (app, connection) => {

    const cUsuarios = require('../controllers/usuarios.controller.js');

    app.route('/usuarios')

        // Iniciar sesión
        .get((req, res) => {
            cUsuarios.logIn(connection, req, res);
        })

        .post((req, res) => {
            cUsuarios.postUsuarios(connection, req, res);
        })

        .put((req, res) => {
            cUsuarios.putUsuarios(connection, req, res);
        })
    

    app.route('/usuarios-contrasena')

        // Obtener contrasena
        .get((req, res) => {
            cUsuarios.getContrasena(connection, req, res);
        })
    

}