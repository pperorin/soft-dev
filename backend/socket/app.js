const express = require('express')
const app = express()
const path = require('path')

const APP_PORT = 5555

const server = app.listen(APP_PORT, () => {
  console.log(`Socket running on : http://127.0.0.1:${APP_PORT}`)
})

const io = require('socket.io')(server)

// ตั้งค่า เพื่อให้ express ทำการ render view ที่โฟลเดอร์ views
// และใช้ template engine เป็น pug
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('socket')
})

io.on('connection', (socket) => {
  console.log('a user connected')
  socket.on('chatter', (message) => {
    console.log('chatter : ', message)
    io.emit('chatter', message)
  })
})
