// Importando librerías necesarias
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

// Importando rutas
const rUsuarios = require('./routes/usuarios.routes.js');
const rCompetencias = require('./routes/competencias.routes.js');
const rValoraciones = require('./routes/valoraciones.routes.js');
const rValoracionesFinales = require('./routes/valoracionesFinales.routes.js');


// Verificando conexión de mysql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'evaluateasy'
});

connection.connect(err => {
    if (err) {
        console.log('Ocurrió un error al intentar conectarse a la base de datos.');
        console.log(err.stack);
    }
});


// Middlewares
app.use(cors())
app.use(express.json())

// Routes
rUsuarios(app, connection); 
rCompetencias(app, connection);
rValoraciones(app, connection);
rValoracionesFinales(app, connection);


// Iniciando el servidor
app.listen(3001, () => {
    console.log('Server on port 3001')
})


