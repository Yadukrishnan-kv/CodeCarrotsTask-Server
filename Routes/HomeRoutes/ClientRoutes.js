const { Router } = require("express");
const ClientRoute = Router();
const ClientController = require("../../Controller/HomeController/ClientController");


ClientRoute.post("/createclient", ClientController.create);             
ClientRoute.get("/viewclient", ClientController.view);
ClientRoute.get("/getclient/:id", ClientController.getclient);            
ClientRoute.put("/updateclient/:id", ClientController.update);  

module.exports=ClientRoute