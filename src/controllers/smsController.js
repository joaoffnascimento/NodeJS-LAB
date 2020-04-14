const express = require('express');
const router = express.Router();
const authMiddleware = require('./../middlewares/auth');
const accountSid = "ACb2428312d4edd2fc80854babf89c980b"
const authToken = "e406d3bad8bc542d3414f1b522e480af"
const client = require('twilio')(accountSid, authToken)

const MessagingResponse = require('twilio').twiml.MessagingResponse

router.use(authMiddleware);

router.post('/receive', async (req, res) => {
    const twiml = new MessagingResponse()

    try {
        twiml.message = 'Histeria !!!'

        res.writeHead(200, { 'Content-Type': 'text-xml' })
        red.end(twiml.toString())

        res.send(200)
    } catch (error) {
        return res.status(400).send({ error: error });
    }

})

router.post('/:dest/:msg', async (req, res) => {
    const { dest, msg } = req.params

    try {
        client.messages.create({
            to: dest,
            from: "+19094130543",
            body: msg
        }).then((message) => console.log('-->', message.sid))

        res.send(200)

    } catch (error) {
        return res.status(400).send({ error: error });
    }
})

module.exports = app => app.use('/sms', router);