const { Router } = require("express");
const Routess = Router();
const WelcomeNoteSchemaCollection = require("../../Controller/HomeController/WelcomNoteController");


Routess.post("/createwel", WelcomeNoteSchemaCollection.create);             
Routess.get("/viewwelcomeNote", WelcomeNoteSchemaCollection.view);
Routess.get("/getproductswelcomeNote/:id", WelcomeNoteSchemaCollection.gethome);            
Routess.put("/updatewelcomeNote/:id", WelcomeNoteSchemaCollection.update);  

module.exports=Routess