const {Schema,model}=require("mongoose")

const Companyschema= new Schema({
    companyimg1:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{timestamps:true})
const CompanyCollection=model("Company",Companyschema)
module.exports=CompanyCollection