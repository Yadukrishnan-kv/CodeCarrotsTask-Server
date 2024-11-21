const {Schema,model}=require("mongoose")

const Clientschema= new Schema({
    logo1:{
        type:String,
        required:true
    },
    logo2:{
        type:String,
        required:true
    },
    logo3:{
        type:String,
        required:true
    },
    logo4:{
        type:String,
        required:true
    },
    logo5:{
        type:String,
        required:true
    },
    logo6:{
        type:String,
        required:true
    }

},{timestamps:true})
const ClientCollection=model("Client",Clientschema)
module.exports=ClientCollection