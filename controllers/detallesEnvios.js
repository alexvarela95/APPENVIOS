const {request, response} = require('express')
const {ListadoDetallesEnvios} = require('../models/detallesEnvios')
const {guardarDB, leerDB} = require('../helpers/gestorDB')

const getDetallesEnvios = (req = request, res = response) => {
    let lista = new ListadoDetallesEnvios()
    let datosJSON = leerDB('detallesEnvios');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const postDetallesEnvios = (req = request, res = response) => {
    let lista = new ListadoDetallesEnvios()
    let datosJSON = leerDB('detallesEnvios');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearDetallesEnvio(req.body)
    guardarDB(lista.listadoArr,'detallesEnvios')
    res.send('Registro Creado DetallesEnvios')
}

const putDetallesEnvios = (req = request, res = response) => {
    let lista = new ListadoDetallesEnvios()
    let datosJSON = leerDB('detallesEnvios');
    lista.cargarTareasFromArray(datosJSON)
    const datos = lista.listadoArr.map(item =>
        item.id == req.params.id ? {"id":item.id, ...req.body}: item
        );
    guardarDB(datos,'detallesEnvios')
    res.send('Registro Actualizado DetallesEnvios')
}

const deleteDetallesEnvios = (req = request, res = response) => {
    let lista = new ListadoDetallesEnvios()
    let datosJSON = leerDB('detallesEnvios');
    lista.cargarTareasFromArray(datosJSON)
    let data = lista.listadoArr.filter(item => item.id !== req.params.id)
    guardarDB(data, 'detallesEnvios')
    res.send('Registro Eliminado DetallesEnvios')
}

module.exports = {
    getDetallesEnvios, postDetallesEnvios, putDetallesEnvios, deleteDetallesEnvios
}