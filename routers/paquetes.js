const { Router } = require("express")
//Uso { Router } para destructurar un objeto y solo obtener lo que ocupa de el
const router = Router
//Inicia la funcion router

    router.get('/', (req, res)=> res.send('GET Endpoint para Paquetes'))
    router.post('/', (req, res)=> res.send('POST Endpoint para Paquetes'))
    router.put('/', (req, res)=> res.send('PUT Endpoint para Paquetes'))
    ro.delete('/', (req, res)=> res.send('DELETE Endpoint para Paquetes'))

    module.exports = router