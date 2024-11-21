const {Schema,model}=require("mongoose")

const Silderschema= new Schema({
    sliderimg1:{
        type:String,
        required:true
    },
    
    slidername:{
        type:String,
        required:true
    },
    slidertitle:{
        type:String,
        required:true
    },
    
    slidercontent:{
        type:String,
        required:true
    }

},{timestamps:true})
const SilderCollection=model("Silder",Silderschema)
module.exports=SilderCollection