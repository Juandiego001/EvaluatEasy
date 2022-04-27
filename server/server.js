// Importando librerías necesarias
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

// Importando rutas



// Verificando conexión de mysql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'masterkey',
    database: 'evaluateasy'
});

connection.connect(err => {
    if (err) {
        console.log('Ocurrió un error al intentar conectarse a la base de datos.');
        console.log(err.stack);
    }

    console.log('Conexión a la base de datos exitosa');
});


// Middlewares
app.use(cors())
app.use(express.json())

// Iniciando el servidor
app.listen(3001, () => {
    console.log('Server on port 3001')
})


