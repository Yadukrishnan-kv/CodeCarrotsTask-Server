const { Router } = require("express");
const Route3= Router();
const SliderController = require("../../Controller/HomeController/SliderController");


Route3.post("/createSlider", SliderController.create);             
Route3.get("/viewSlider", SliderController.view);
Route3.get("/getSlider/:id", SliderController.get);            
Route3.put("/updateSlider/:id", SliderController.update);  

module.exports=Route3