const mongoose=require("mongoose")

const studentSchema=new mongoose.Schema({
  _id:mongoose.Schema.Types.ObjectId,
  name:String,
  email:String,
  gender:String,
  age:Number,
  address:String,
  salary:Number
})

module.exports=mongoose.model('Student',studentSchema)