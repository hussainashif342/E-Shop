const express = require("express")
const { default: mongoose } = require("mongoose")
const Student = require("../model/Student")
const router = express.Router()

router.get("/", (req, res) => {
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
router.get("/:id", (req, res) => {
  Student.find({ _id: req.params.id }).then((resp) => {
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
router.put("/:id", (req, res) => {
  Student.findOneAndUpdate({ _id: req.params.id }, {
    $set: {
      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender,
      phone: req.body.phone,
      age: req.body.age,
      qualification: req.body.qualification,
      address: req.body.address,

    }
  }).then((resp) => {
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
router.delete("/:id", (req, res) => {
  Student.deleteOne({ _id: req.params.id }).then((resp) => {
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
router.post("/", (req, res,) => {
  console.log("re")
  const Student = new Student({
    _id: new mongoose.Types.ObjectId,
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    phone: req.body.phone,
    age: req.body.age,
    qualification: req.body.qualification,
    address: req.body.address,
  })
  Student.save().then(result => {
    console.log(result);
    res.status(200).json({
      newUser: result
    }).catch((err) => {
      console.log(err)
      // res.status(500).json({
      //   error: err
      // })
    })


  })

})










module.exports = router