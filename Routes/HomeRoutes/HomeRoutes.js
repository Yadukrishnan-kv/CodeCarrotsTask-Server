const { Router } = require("express");
const Route = Router();
const HomeController = require("../../Controller/HomeController/HomeController");


Route.post("/create", HomeController.create);             
Route.get("/view", HomeController.view);
Route.get("/getproducts/:id", HomeController.gethome);            
Route.put("/update/:id", HomeController.update);  

module.exports=Route