const jwt= require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const AdminCollection=require("../../Models/HomePageModel/AdminModel")




const register=async (req,res)=>{
    try{
     const {name,email,password}=req.body;
    
     console.log(req.body,password);
     const existingUser = await AdminCollection.findOne({ email });
     if (existingUser) {
     return res.status(400).send({ message: 'User already exists' });
   }
   const hashedpassword=await bcrypt.hash(password,10);
     const response=await AdminCollection.create({
        name,
        email,
        password:hashedpassword,
       
     })
    
    
     if(response?._id){
     
        const token=jwt.sign({id:response._id,role:response.role},process.env.JWT_KEY,{expiresIn:"7d"})
        console.log(token);
        return res.status(200).send({ token, user: response });
        
    }
   
    
    }catch(err){
        console.log('register error:',err.message);
        return res.status(500).send({message:"internal server error"})
        
    }
  }
  
  //login
  const login=async (req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
         return res.status(400).send("please provide email,password ")
        }
        
   const newuser=await AdminCollection.findOne({email:email}).select('+password')
   if(!newuser){
    return res.status(400).send('invalid email or password')
   }
   
   const hashpassword=newuser.password;
   const ispassword=await bcrypt.compare(password,hashpassword)
   if (!ispassword) {
    return res.status(400).send({ message: "Invalid email or password" });
  }
   
    const token=jwt.sign({sub:newuser},process.env.JWT_KEY,{expiresIn:"7d"})
    
    return res.status(200).send({token:token,newuser})
  }
    catch(err){
        console.log(err.message);
        return res.status(500).send({message:"internal server error"})
    }
  }
  
  // to view user details in profile page  
  const proview=async(req,res)=>{
    try{
        
         const {id}=req.params
         const response=await AdminCollection.findById(id)
         if (!response) {
          return res.status(404).send('User not found');                          
        }
        res.json(response);
    }catch(err){
        res.status(500).send({message:"internal server error"})
    }
  }

  
  module.exports = {
    register, login, proview
  };
  
