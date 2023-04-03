const Router = require('express')
const router = new Router()
const busketController = require('../controllers/busketController')
const checkRole = require("../middleware/checkRoleMiddleware");
const authMiddleware = require("../middleware/authMiddlware");
const deviceController = require("../controllers/deviceController");
const brandController = require("../controllers/brandController");


router.post('/',authMiddleware,busketController.create)
router.get('/:id',busketController.getOne)
router.get('/',busketController.getAll)




module.exports = router