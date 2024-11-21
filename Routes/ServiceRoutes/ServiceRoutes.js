const { Router } = require("express");
const Route6= Router();
const ServiceController = require("../../Controller/ServiceController/ServiceController")


Route6.post("/createService", ServiceController.create);             
Route6.get("/viewService", ServiceController.view);
Route6.get("/getService/:id", ServiceController.get);            
Route6.put("/updateService/:id", ServiceController.update);  

module.exports=Route6