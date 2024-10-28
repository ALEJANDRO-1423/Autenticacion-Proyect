// Importar las librerías necesarias
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Crear una instancia de Express
const app = express();
const PORT = 5000; // Puerto en el que se ejecutará el servidor

// Middleware
app.use(cors()); // Habilitar CORS para permitir solicitudes desde otros orígenes
app.use(bodyParser.json()); // Para analizar el cuerpo de las solicitudes como JSON

// Simulando una base de datos en memoria
const usuarios = {
    "usuario1": "contrasena1",
    "usuario2": "contrasena2"
};

// Endpoint para registro
app.post('/registro', (req, res) => {
    const { usuario, contrasena } = req.body;

    // Registrar el nuevo usuario (simulación)
    if (usuarios[usuario]) {
        return res.status(400).send('El usuario ya existe.'); // Error si el usuario ya existe
    }

    usuarios[usuario] = contrasena; // Agregar el nuevo usuario
    res.status(201).send('Registro exitoso'); // Respuesta de éxito
});

// Endpoint para iniciar sesión
app.post('/login', (req, res) => {
    const { usuario, contrasena } = req.body;

    // Verificar credenciales
    if (usuarios[usuario] && usuarios[usuario] === contrasena) {
        res.status(200).send('Autenticación satisfactoria'); // Autenticación exitosa
    } else {
        res.status(401).send('Error en la autenticación'); // Error en la autenticación
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`); // Mensaje de inicio
});
