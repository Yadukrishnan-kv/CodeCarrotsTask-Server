const { Router } = require("express");
const Route7= Router();
const GalleryController = require("../../Controller/GalleryController/GalleryController")


Route7.post("/createGallery", GalleryController.create);             
Route7.get("/viewGallery", GalleryController.view);
Route7.get("/getGallery/:id", GalleryController.get);            
Route7.put("/updateGallery/:id", GalleryController.update);  

module.exports=Route7