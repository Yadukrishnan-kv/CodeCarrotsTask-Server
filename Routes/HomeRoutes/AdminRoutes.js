const {Router}=require("express")
const Routes=Router()
const AdminController=require("../../Controller/HomeController/AdminController")
Routes.post("/register",AdminController.register)
Routes.post("/login",AdminController.login)
Routes.get("/proview/:id",AdminController.proview)

module.exports=Routes