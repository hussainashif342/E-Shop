const jwt = require("jsonwebtoken")
module.exports = (req, res, next) => {
  try {
    console.log(req.headers.authorization)
    console.log(req.body.token)
    // var token = req.body.token.split(" ")[1]
    var token = req.headers.authorization.split(" ")[1]
    console.log(token)

    var decode = jwt.verify(token, 'secret',)
    req.userdata = decode;
    next();
  }
  catch {
    res.status(401).json({
      error: "Invalid token"
    })
  }

}