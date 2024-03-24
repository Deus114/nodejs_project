require('dotenv').config()

const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')

const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.hostname

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

configViewEngine(app)

app.use(webRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})