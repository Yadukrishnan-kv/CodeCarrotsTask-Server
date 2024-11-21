const { Router } = require("express");
const Route9= Router();
const ContactController = require("../../Controller/ContactUsController/ContactUsController")


Route9.post("/createContact", ContactController.create);             
Route9.get("/viewContact", ContactController.view);
Route9.get("/getContact/:id", ContactController.get);            
Route9.put("/updateContact/:id", ContactController.update);  

module.exports=Route9