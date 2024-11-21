const {Schema,model}=require("mongoose")

const Servicesschema= new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    servicesimg1:{
        type:String,
        required:true
    },
    
    servicesimg1title:{
        type:String,
        required:true
    },
   
     servicesimg1content:{
        type:String,
        required:true
    }
   


},{timestamps:true})
const ServicesCollection=model("Services",Servicesschema)
module.exports=ServicesCollection