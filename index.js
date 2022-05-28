const express = require('express')
const app = express()
const { engine } = require("express-handlebars")
const router = require('./router')
const chalk = require('chalk')

require('dotenv').config()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/', router)
app.use(express.static('public'))

app.listen(8080, () =>{
    console.log(chalk.bgGreen.black('Servidor iniciado ! PORTA:8080'))
})