const {Schema,model}=require("mongoose")

const Ourserviceschema= new Schema({
    serviceimg1:{
        type:String,
        required:true
    },
    serviceimg2:{
        type:String,
        required:true
    },
    servicetitle:{
        type:String,
        required:true
    },
    servicecontent:{
        type:String,
        required:true
    }
   
},{timestamps:true})
const OurserviceCollection=model("Ourservice",Ourserviceschema)
module.exports=OurserviceCollection