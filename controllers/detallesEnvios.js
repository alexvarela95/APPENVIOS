const { request, response } = require('express')

const GetDetallesEnvios = (req = request, res = response) =>
res.send('Get Endpoint para Detalle Envios')

const postDetallesEnvios = (req = request, res = response) =>
res.send('POST Endpoint para Detalle de Envio')

const putDetallesEnvios = (req = request, res = response) =>
res.send('PUT Endpoint para Detalle de Envio')

const deleteDetallesEnvios = (req = request, res = response) =>
res.send('DELETE Endpoint para Detalle de Envio')

module.exports = {

    GetDetallesEnvios,
    PostDetallesEnvios,
    putDetallesEnvios,
    deleteDetallesEnvios
}
