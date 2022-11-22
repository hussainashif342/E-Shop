const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
  _id:mongoose.Schema.Types.ObjectId,
  name:String,
  email:String,
  password:String,
  type:String
  })
module.exports=mongoose.model('User',userSchema)