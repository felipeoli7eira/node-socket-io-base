const express = require('express')
const app = express()
const http = require('http').createServer(app)
const socketIO = require('socket.io')(http)

socketIO.on('connection', (socket) => {

    socket.on('disconnect', () => {

        console.log('disconnected...(' + socket.id + ')')
    })

    socket.on('eventNameExample', (data) => console.log(data))

    socket.emit('response', { received: true })
})

app.set('view engine', 'ejs')

app.get('/', (req, res) => {

    res.render('index')
})

http.listen(8080, () => console.log('running...'))