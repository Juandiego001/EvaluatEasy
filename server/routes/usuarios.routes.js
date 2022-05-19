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

        // Sirve para eliminar trabajadores también
        .delete((req, res) => {
            cUsuarios.deleteUsuarios(connection, req, res);
        })
    

    app.route('/usuarios-contrasena')

        // Obtener contrasena
        .get((req, res) => {
            cUsuarios.getContrasena(connection, req, res);
        });

    
    app.route('/usuarios-trabajadores')

        // Obtener todos los trabjadores
        .get((req, res) => {
            cUsuarios.getTrabajadores(connection, req, res);
        })
        
        // Crear un usuario trabajador
        .post((req, res) => {
            cUsuarios.postTrabajadores(connection, req, res);
        })

        // Actualuzar un usuario trabajador
        .put((req, res) => {
            cUsuarios.putTrabajadores(connection, req, res);
        })

}