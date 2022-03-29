const {request, response} = require('express')
//Uso { Router } para destructurar un objeto y solo obtener lo que ocupa de el
const {ListadoEnvios} = require('../models/envios')
const {guardarDB, leerDB} = require('../helpers/gestorDB')

const getEnvios = (req = request, res = response) => {
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const postEnvios = (req = request, res = response) => {
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearEnvio(req.body)
    guardarDB(lista.listadoArr,'envios')
    res.send('Registro Creado Envio')
}

const putEnvios = (req = request, res = response) => {
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    const datos = lista.listadoArr.map(item =>
        item.id == req.params.id ? {"id":item.id, ...req.body}: item
        );
    guardarDB(datos,'envios')
    res.send('Registro Actualizado Envio')
}

const deleteEnvios = (req = request, res = response) => {
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    let data = lista.listadoArr.filter(item => item.id !== req.params.id)
    guardarDB(data, 'envios')
    res.send('Registro Eliminado Envio')
}

module.exports = {
    getEnvios, postEnvios, putEnvios, deleteEnvios
}