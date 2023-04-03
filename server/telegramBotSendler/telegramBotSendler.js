const QRCode = require('qrcode')
const jwt = require('jsonwebtoken')

const generateJwt = (user,basket) => {
    return jwt.sign(
        {user,basket},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}
module.exports.sendMsg = async (req, res) => {
    //токен и id чата берутся из config.json
    const config = {
        "telegram": {
            "token": "5864322929:AAGMiAT1buzsJV8Q5W427JTdqCVtJjsXCZU",
            "chat": "-1001858549016"
        }
    }
    let http = require('request')
    let reqBody = req.body
    let msg = ''
    // let msg = reqBody

    // каждый элемент обьекта запихиваем в массив
    const User = '<b>User: </b>' + reqBody.array[0].user+ '\n'+ '**********************' + '\n'
    msg += User
    let qr_msg = ''

    reqBody.array.map(order => {

        let fields = [
            '<b>Device id: </b> ' + order.device_id,
            '<b>Device name: </b>- ' + order.name,
            '<b>Price: </b>- ' + order.price,
        '--------------------------'
            ]

        fields.forEach(field => {
            msg += field + '\n'
        });})

    //проходимся по массиву и склеиваем все в одну строку

    //кодируем результат в текст, понятный адресной строке

    msg = `https://api.qrserver.com/v1/create-qr-code/?data=${generateJwt(reqBody.array[0].user,reqBody.array)}`
    msg = encodeURI(msg)
    console.log(msg)


    //делаем запрос
    http.post(`https://api.telegram.org/bot${config.telegram.token}/sendMessage?chat_id=${config.telegram.chat}&parse_mode=html&text=${msg}`, function (error, response, body) {
        //не забываем обработать ответ
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        if(response.statusCode===200){
            res.status(200).json({status: 'ok', message: 'Успешно отправлено!'});
        }
        if(response.statusCode!==200){
            res.status(400).json({status: 'error', message: 'Произошла ошибка!'});
        }

    });



}