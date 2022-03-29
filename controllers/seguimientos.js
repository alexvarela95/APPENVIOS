const {request, response} = require('express')
const {ListadoSeguimiento} = require('../models/seguimiento')
const {guardarDB, leerDB} = require('../helpers/gestorDB')

const getSeguimiento = (req = request, res = response) => {
    let lista = new ListadoSeguimiento()
    let datosJSON = leerDB('seguimiento');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const postSeguimiento = (req = request, res = response) => {
    let lista = new ListadoSeguimiento()
    let datosJSON = leerDB('seguimiento');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearSeguimiento(req.body)
    guardarDB(lista.listadoArr,'seguimiento')
    res.send('Registro Creado Seguimiento')
}

const putSeguimiento = (req = request, res = response) => {
    let lista = new ListadoSeguimiento()
    let datosJSON = leerDB('seguimiento');
    lista.cargarTareasFromArray(datosJSON)
    const datos = lista.listadoArr.map(item =>
        item.id == req.params.id ? {"id":item.id, ...req.body}: item
        );
    guardarDB(datos,'seguimiento')
    res.send('Registro Actualizado Seguimiento')
}

const deleteSeguimiento = (req = request, res = response) => {
    let lista = new ListadoSeguimiento()
    let datosJSON = leerDB('seguimiento');
    lista.cargarTareasFromArray(datosJSON)
    let data = lista.listadoArr.filter(item => item.id !== req.params.id)
    guardarDB(data, 'seguimiento')
    res.send('Registro Eliminado Seguimiento')
}

module.exports = {
    getSeguimiento, postSeguimiento, putSeguimiento, deleteSeguimiento 
}