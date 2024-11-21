const {Schema,model}=require("mongoose")

const Newsschema= new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    newsimg1:{
        type:String,
        required:true
    },
    newsdate:{
        type:String,
        required:true
    },
    Newsimg1title:{
        type:String,
        required:true
    },
   
    Newsimg1content:{
        type:String,
        required:true
    }
   


},{timestamps:true})
const NewsCollection=model("News",Newsschema)
module.exports=NewsCollection