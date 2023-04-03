const Router = require('express')
const router = new Router()
const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const busketRouter = require('./busketRouter')
const telegramRouter = require('./telegramRoute')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device',deviceRouter)
router.use('/basket',busketRouter)

router.use('/tg',telegramRouter)



module.exports = router