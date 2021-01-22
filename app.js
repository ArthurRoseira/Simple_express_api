const express = require('express')
const app = express()
const dotenv = require(`dotenv`)
const mongoose = require(`mongoose`)
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' })
connectDB()

//midleware
//body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/subscribers', require('./routes/subscribers'))


const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Server Running in ${process.env.PORT} mode on por ${PORT}`))