const { Router } = require("express")
//Uso { Router } para destructurar un objeto y solo obtener lo que ocupa de el
const {ListadoEnvios} = require('../models/envios');
const {guardarDB, leerDB} = requiere('../helpers/gestorDB.js')

const getEnvios = (req = request, res = response) => {
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
    }


    router.get('/', (req, res)=> res.send('GET Endpoint para Envio'))
    router.post('/', (req, res)=> res.send('POST Endpoint para Envio'))
    router.put('/', (req, res)=> res.send('PUT Endpoint para Envio'))
    router.delete('/', (req, res)=> res.send('DELETE Endpoint para Envio'))
