const {Schema,model}=require("mongoose")
const validator=require("validator")
jwt= require("jsonwebtoken")

const Adminschema= new Schema({
    name:{
        type:String,
        required:[true,"Name is Require"],
    },
    email:{
        type:String,
        required:[true,"Email is Require"],
        unique:true,
        validate:validator.isEmail
    },
    password:{
        type:String,
        required:[true,"Password is Require"],
        select:true
    }
},{timestamps:true})
const AdminCollection=model("Admin",Adminschema)
module.exports=AdminCollection