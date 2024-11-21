const { Router } = require("express");
const Route1 = Router();
const ServicesController = require("../../Controller/HomeController/ServicesController");


Route1.post("/createServices", ServicesController.create);             
Route1.get("/viewServices", ServicesController.view);
Route1.get("/getServices/:id", ServicesController.get);            
Route1.put("/updateServices/:id", ServicesController.update);  

module.exports=Route1