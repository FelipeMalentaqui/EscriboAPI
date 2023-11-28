const express = require('express');
const usuarioRoutes = require('./routers/usuario.routes');

const app = express();

app.use(express.json());

app.use(usuarioRoutes);

module.exports = app;
