const { Router } = require("express")
const {
    GetDetallesEnvios,
    postDetallesEnvios,
    putDetallesEnvios,
    deleteDetallesEnvios,

} = require('../controllers/detallesEnvios');
const { GetDetalleEnvios } = require("../controllers/detallesEnvios")
//Uso { Router } para destructurar un objeto y solo obtener lo que ocupa de el
const router = Router
//Inicia la funcion router

router.get('/', GetDetallesEnvios)
router.post('/', postDetallesEnvios)
router.put('/',  putDetallesEnvios)
router.delete('/', deleteDetallesEnvios)

    module.exports = router