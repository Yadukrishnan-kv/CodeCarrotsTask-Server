const { Router } = require("express");
const Route8= Router();
const FaqController = require("../../Controller/FaqController/FaqController")


Route8.post("/createFaq", FaqController.create);             
Route8.get("/viewFaq", FaqController.view);
Route8.get("/getFaq/:id", FaqController.get);            
Route8.put("/updateFaq/:id", FaqController.update);  

module.exports=Route8