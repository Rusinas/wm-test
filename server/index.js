const express = require('express')
const app = express()
const history = require('connect-history-api-fallback')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

app.use(cors())
app.use(morgan('combined'))
app.use(bodyParser.json())

// Обработка SPA
app.use(express.static('public'))
app.use(history())
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))

app.post('/check', function (req, res) {
    const { username, password } = req.body
    if (!username || !password) return res.status(400).send('Не указаны параметры')

    if (username === 'bob' && password === 'marley') {
        res.send({
            username,
            traffic: 12,
            minutes: 13
        })
    }
    else res.status(403).send('Неверный логин или пароль')
})

app.listen(3000, function () {
    console.log('Server started on port 3000')
})