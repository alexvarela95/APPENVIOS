const {Router} = require('express');
//Uso { Router } para destructurar un objeto y solo obtener lo que ocupa de el
const {getEnvios, postEnvios, putEnvios, deleteEnvios} = require('../controllers/envios')

const router = Router();

router.get('/', getEnvios)
router.post('/', postEnvios)
router.put('/:id', putEnvios)
router.delete('/:id', deleteEnvios)

module.exports = router