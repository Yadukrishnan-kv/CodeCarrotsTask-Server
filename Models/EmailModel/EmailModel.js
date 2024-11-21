const {Schema,model}=require("mongoose")

const Emailschema= new Schema({
   name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    sub:{
        type:String,
        required:true
    }, 
     msg:{
        type:String,
        required:true
    },
  
   
},{timestamps:true})
const EmailCollection=model("email",Emailschema)
module.exports=EmailCollection