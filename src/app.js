require('dotenv').config()

const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')

const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.hostname

configViewEngine(app)

app.use(webRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})