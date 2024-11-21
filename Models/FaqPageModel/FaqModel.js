const {Schema,model}=require("mongoose")

const Faqschema= new Schema({
   Faqtitle:{
        type:String,
        required:true
    },
    Faqanswer:{
        type:String,
        required:true
    }
   
},{timestamps:true})
const FaqCollection=model("Faq",Faqschema)
module.exports=FaqCollection