const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


const routes = require('./routes')

require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useNewUrlParser: true
}, console.log("connected to database"))

app.listen(3000, () => console.log("server running at http://localhost:3000"))