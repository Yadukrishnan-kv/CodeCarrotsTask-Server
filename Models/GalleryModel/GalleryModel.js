const {Schema,model}=require("mongoose")

const Galleryschema= new Schema({
    Galleryimg1:{
        type:String,
        required:true
    },
    Gallerytitle:{
        type:String,
        required:true
    },
    Gallerycontent:{
        type:String,
        required:true
    }
   
},{timestamps:true})
const GalleryCollection=model("Gallery",Galleryschema)
module.exports=GalleryCollection