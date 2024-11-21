const { Router } = require("express");
const Route4= Router();
const NewsController = require("../../Controller/HomeController/NewsController")


Route4.post("/createNews", NewsController.create);             
Route4.get("/viewNews", NewsController.view);
Route4.get("/getNews/:id", NewsController.get);            
Route4.put("/updateNews/:id", NewsController.update);  

module.exports=Route4