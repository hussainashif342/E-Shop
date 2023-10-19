const express = require('express')
const app = express()
let cors = require("cors");
let bodyParser = require("body-parser");
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);
app.use(cors());
app.listen(port, () => {
  console.log("Connected to port " + port);
});
// 404 Error
app.use((req, res, next) => {
  next();
});
app.use(function (err, req, res, next) {
  console.error(err.message);

  if (!err.statusCode) err.statusCode = 500;

  res.status(err.statusCode).send(err.message);

});

 

// app.use('/',indexRouter)

 

 