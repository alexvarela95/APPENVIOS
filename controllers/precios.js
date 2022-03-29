const {request, response} = require('express')
const {ListadoPrecios} = require('../models/precios')
const {guardarDB, leerDB} = require('../helpers/gestorDB')

const getPrecios = (req = request, res = response) => {
    let lista = new ListadoPrecios()
    let datosJSON = leerDB('precios');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const postPrecios = (req = request, res = response) => {
    let lista = new ListadoPrecios()
    let datosJSON = leerDB('precios');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearPrecios(req.body)
    guardarDB(lista.listadoArr,'precios')
    res.send('Registro Creado Precios')
}

const putPrecios = (req = request, res = response) => {
    let lista = new ListadoPrecios()
    let datosJSON = leerDB('precios');
    lista.cargarTareasFromArray(datosJSON)
    const datos = lista.listadoArr.map(item =>
        item.id == req.params.id ? {"id":item.id, ...req.body}: item
        );
    guardarDB(datos,'precios')
    res.send('Registro Actualizado Precios')
}

const deletePrecios = (req = request, res = response) => {
    let lista = new ListadoPrecios()
    let datosJSON = leerDB('precios');
    lista.cargarTareasFromArray(datosJSON)
    let data = lista.listadoArr.filter(item => item.id !== req.params.id)
    guardarDB(data,'precios')
    res.send('Registro Eliminado Precios')
}

module.exports = {
    getPrecios, postPrecios, putPrecios, deletePrecios
}