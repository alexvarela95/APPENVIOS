const { Router } = require("express")
//Uso { Router } para destructurar un objeto y solo obtener lo que ocupa de el
const { getPrecios, postPrecios, putPrecios, deletePrecios } = require('../controllers/precios');

const router = Router();

router.get('/', getPrecios)
router.post('/', postPrecios)
router.put('/:id', putPrecios)
router.delete('/:id', deletePrecios)

module.exports = router
