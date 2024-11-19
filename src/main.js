const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const mainRoutes = require('./server/routes/MainRoutes')
const publicDir = __dirname + '/view'

app.use(express.static(publicDir))

app.use('/', mainRoutes)

app.listen(PORT, () => {
    console.log('app is listening on PORT: ' + PORT)
})

