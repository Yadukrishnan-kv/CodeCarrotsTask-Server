const { Router } = require("express");
const TeamsRoute= Router();
const TeamController = require("../../Controller/AboutController/TeamController")


TeamsRoute.post("/createTeam", TeamController.create);             
TeamsRoute.get("/viewTeam", TeamController.view);
TeamsRoute.get("/getTeam/:id", TeamController.get);            
TeamsRoute.put("/updateTeam/:id", TeamController.update);  

module.exports=TeamsRoute