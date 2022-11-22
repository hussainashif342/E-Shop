const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const router = express.Router()
const User = require("../model/user")
const checkAuth = require("../middleware/checkAuth")
const Student = require("../model/Student")


router.get("/", checkAuth, (req, res) => {
  User.find().then((resp) => {
    res.status(200).json({
      data: resp
    })

  }).catch((err) => {
    console.log(err)
    res.status(500).json({
      err: err
    })
  })
})
router.post("/signup", (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err
      })
    }
    else {
      new User({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        email: req.body.email,
        password: hash,
      })
        .save().then(result => {
          console.log(result);
          res.status(200).json({
            newuser: result.name
          }).catch((err) => {
            console.log(err)
            res.status(500).json({
              error: err
            })
          })


        })
    }
  })
})

router.post("/login", (req, res) => {
  User.find({ email: req.body.email }).exec().then((user) => {
    // console.log(user)
    if (user.length < 1) {
      return res.status(401).json({
        msg: 'user not found'
      })
    }
    bcrypt.compare(req.body.password, user[0].password, (err, result) => {
      if (!result) {
        return res.status(404).json({
          msg: "user not found wrong password"
        })

      }
      if (result) {
        const token = jwt.sign({ name: user.name, email: user.email, }, "secret", { expiresIn: "2h" })
        res.status(200).json({
          name: req.body.name,
          email: req.body.email,
          token: token,
        })

      }
    })

  }).catch((err) => {
    res.status(500).json({
      err: err
    })
  })

})

// student
router.get("/student", checkAuth, (req, res) => {
  Student.find().then((resp) => {
    res.status(200).json({
      data: resp
    })

  }).catch((err) => {
    console.log(err)
    res.status(500).json({
      err: err
    })
  })
})









module.exports = router