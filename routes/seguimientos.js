const { Router } = require("express")
//Uso { Router } para destructurar un objeto y solo obtener lo que ocupa de el
const { getSeguimiento, postSeguimiento, putSeguimiento, deleteSeguimiento } = require('../controllers/seguimiento');

const router = Router();

router.get('/', getSeguimiento)
router.post('/', postSeguimiento)
router.put('/:id', putSeguimiento)
router.delete('/:id', deleteSeguimiento)

module.exports = router
