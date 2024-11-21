const {Schema,model}=require("mongoose")

const Teamschema= new Schema({
    memberimg:{
        type:String,
        required:true
    },
    membername:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
  
},{timestamps:true})
const TeamCollection=model("Team",Teamschema)
module.exports=TeamCollection