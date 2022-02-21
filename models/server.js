const express = require ('express');

class Server{
    constructor(){
        this.app = express()
        this.routes();
        }
        routes(){
            this.app.use('/precios', require('../routes/precios'))
            this.app.use('/paquete', require('../routes/paquetes'))
            this.app.use('/envio', require('../routes/envios'))
            this.app.use('/detalleEnvios', require('../routes/detallesEnvios'))
            this.app.use('/seguimiento', require('../routes/seguimientos'))
        }

        listen(){
        this.app.listen(process.env.PORT, ()=>
        console.log("El puerto esta corriendo el puerto TCP"+ process.env.PORT))    
    
    }
}

module.exports = Server