const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('./routes');

//inicializamos Express
const app = express();

//Cargamos middleware para acceder al body del request
app.use(express.json());
//Cargamos middleware para agregar el prefijo api a todas las rutas
 app.use('/api', routes);

//Cargamos archivo .env
dotenv.config();


mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true }, (error, result) => {
    if(error){
        return console.log(`Error al conectar a la base de datos ${error}`);
    }
    console.log("Conexion a la base de datos establecida.");
    app.listen(process.env.PORT, () => {
        console.log(`Hamster rolling on port ${process.env.PORT}`);
    });
});

