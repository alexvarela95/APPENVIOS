const { Router } = require("express")
//Uso { Router } para destructurar un objeto y solo obtener lo que ocupa de el
const router = Router
//Inicia la funcion router

    router.get('/', (req, res)=> res.send(' GET Endpoint para Precios'))
    router.post('/', (req, res)=> res.send(' POST Endpoint para Precios'))
    router.put('/', (req, res)=> res.send(' PUT Endpoint para Precios'))
    router.delete('/', (req, res)=> res.send(' DELETE Endpoint para Precios'))

    module.exports = router