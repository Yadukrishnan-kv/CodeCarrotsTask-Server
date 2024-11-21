const { Router } = require("express");
const Route5= Router();
const CompanyController = require("../../Controller/AboutController/CompanyController")


Route5.post("/createCompany", CompanyController.create);             
Route5.get("/viewCompany", CompanyController.view);
Route5.get("/getCompany/:id", CompanyController.get);            
Route5.put("/updateCompany/:id", CompanyController.update);  

module.exports=Route5