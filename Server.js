const express=require('express')
const cors=require('cors')
const app=express()
require("./Config/db")
app.use(cors({
    origin:"http://localhost:3000",
    methods:"*"
}))
app.use(express.json())

//homepage Routes //
const AdminRoutes=require("./Routes/HomeRoutes/AdminRoutes")
const HomeRoutes=require("./Routes/HomeRoutes/HomeRoutes")
const WelcomRoutes=require("./Routes/HomeRoutes/WelcomNoteRoutes")
const ClientsRoutes=require("./Routes/HomeRoutes/ClientRoutes")
const ServicesRoutes=require("./Routes/HomeRoutes/ServicesRoutes")
const SliderRoutes=require("./Routes/HomeRoutes/SliderRoutes")
const NewsRoutes=require("./Routes/HomeRoutes/NewsRoutes")

//Aboutpage Routes //
const CompanyRoutes=require("./Routes/AboutRoutes/CompanyRoutes")
const TeamRoutes=require("./Routes/AboutRoutes/TeamRoutes")

//Servicepage Routes //
const ServiceRoutes=require("./Routes/ServiceRoutes/ServiceRoutes")

//Gallerypage Routes //
const GalleryRoutes=require("./Routes/GalleryRoutes/GalleryRoutes")

//Faqpage Routes //
const FaqRoutes=require("./Routes/FaqRoutes/FaqRoutes")

//ContactUspage Routes //
const ContactRoutes=require("./Routes/ContactUsRoutes/ContactUsRoutes")

//EmailUspage Routes //
const EmailRoutes=require("./Routes/EmailRoutes/EmailRoutes")

app.use("/",AdminRoutes)
app.use("/",HomeRoutes)
app.use("/",WelcomRoutes)
app.use("/",ClientsRoutes)
app.use("/",ServicesRoutes)
app.use("/",SliderRoutes)
app.use("/",NewsRoutes)
app.use("/",CompanyRoutes)
app.use("/",TeamRoutes)
app.use("/",ServiceRoutes)
app.use("/",GalleryRoutes)
app.use("/",FaqRoutes)
app.use("/",ContactRoutes)
app.use("/",EmailRoutes)


app.listen(4000,(err)=>{
    if (err) process.exit(1);
    console.log("server is running");
})