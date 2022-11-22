const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const bodyparser = require("body-parser")
const app = express()
dotenv.config()
// connsection with atlas
mongoose.connect(process.env.DB_URL)
mongoose.connection.on('error', (err) => {
  console.log("failed")
})
mongoose.connection.on('connected', (err) => {
  console.log("connected")
})
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
const studentRoute = require("./api/routes/student")
const userRoute = require("./api/routes/user")
app.use("/student", studentRoute)
app.use("/user", userRoute)


app.listen(4040, () => {
  console.log("success server")
})
app.use((req, res, next) => {
  res.sendStatus(404).json({
    status: "bad request"
  })
})
