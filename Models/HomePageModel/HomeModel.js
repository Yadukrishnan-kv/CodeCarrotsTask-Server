const {Schema,model}=require("mongoose")

const Homeschema= new Schema({
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
    },
    banner:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    images:{
        type:String,
        required:true
    }

},{timestamps:true})
const HomeCollection=model("Home",Homeschema)
module.exports=HomeCollection