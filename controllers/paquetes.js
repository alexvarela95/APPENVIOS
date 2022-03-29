const {request, response} = require('express')
const {ListadoPaquetes} = require('../models/paquetes')
const {guardarDB, leerDB} = require('../helpers/gestorDB')

const getPaquetes = (req = request, res = response) => {
    let lista = new ListadoPaquetes()
    let datosJSON = leerDB('paquetes');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const postPaquetes = (req = request, res = response) => {
    let lista = new ListadoPaquetes()
    let datosJSON = leerDB('paquetes');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearPaquetes(req.body)
    guardarDB(lista.listadoArr,'paquetes')
    res.send('Registro Creado Paquetes')
}

const putPaquetes = (req = request, res = response) => {
    let lista = new ListadoPaquetes()
    let datosJSON = leerDB('paquetes');
    lista.cargarTareasFromArray(datosJSON)
    const datos = lista.listadoArr.map(item =>
        item.id == req.params.id ? {"id":item.id, ...req.body}: item
        );
    guardarDB(datos,'paquetes')
    res.send('Registro Actualizado Paquetes')
}

const deletePaquetes = (req = request, res = response) => {
    let lista = new ListadoPaquetes()
    let datosJSON = leerDB('paquetes');
    lista.cargarTareasFromArray(datosJSON)
    let data = lista.listadoArr.filter(item => item.id !== req.params.id)
    guardarDB(data, 'paquetes')
    res.send('Registro Eliminado Paquetes')
}

module.exports = {
    getPaquetes, postPaquetes, putPaquetes, deletePaquetes
}