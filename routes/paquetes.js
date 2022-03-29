const { Router } = require("express")
//Uso { Router } para destructurar un objeto y solo obtener lo que ocupa de el
const { getPaquetes, postPaquetes, putPaquetes, deletePaquetes,  } = require('../controllers/paquetes');

const router = Router();

router.get('/', getPaquetes)
router.post('/', postPaquetes)
router.put('/:id', putPaquetes)
router.delete('/:id', deletePaquetes)

module.exports = router