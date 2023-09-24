
require('dotenv').config(); //Para poder utilizar las variables de entorno

module.exports = {
    GetBdPool: function() {

        const { Pool} = require('pg'); //Export desde el driver pg, el objeto Pool, para hacer peticiones a la base de datos.

       
        //Aqui instacion el pool, y le paso los datos de conexion a la bd
        const pool = new Pool ({
            host: process.env.DB_HOST,
            user: DB_USER,
            password: DB_PASSWORD,
            database: DB_NAME,
            port: DB_PORT
          
        
        });

       

       return pool;


    }
 }

