const { Router } = require("express");
const Route10= Router();
const EmailController = require("../../Controller/EmailController/EmailController")


Route10.post("/createEmail", EmailController.create);             
Route10.get("/viewEmail", EmailController.view);

module.exports=Route10