const {Schema,model}=require("mongoose")

const WelcomeNoteSchema= new Schema({
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
    point1:{
        type:String,
        required:true
    },
    point2:{
        type:String,
        required:true
    },
    point3:{
        type:String,
        required:true
    },
    
    point4:{
        type:String,
        required:true
    }
    

},{timestamps:true})
const WelcomeNoteSchemaCollection=model("welcomenote",WelcomeNoteSchema)
module.exports=WelcomeNoteSchemaCollection