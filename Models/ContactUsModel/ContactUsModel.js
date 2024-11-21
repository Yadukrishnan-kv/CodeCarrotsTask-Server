const {Schema,model}=require("mongoose")

const Contactschema= new Schema({
   place:{
        type:String,
        required:true
    },
    Street:{
        type:String,
        required:true
    },
    mobileno:{
        type:String,
        required:true
    },
    opens:{
        type:String,
        required:true
    }, 
     Satsun:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
   
},{timestamps:true})
const ContactCollection=model("Contact",Contactschema)
module.exports=ContactCollection