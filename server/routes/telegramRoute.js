const Router = require('express')
const router = new Router()
const tgSendler = require('../telegramBotSendler/telegramBotSendler');

router.post('/',tgSendler.sendMsg)
router.get('/',)


module.exports = router