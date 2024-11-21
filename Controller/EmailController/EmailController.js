const EmailCollection = require("../../Models/EmailModel/EmailModel")
const create=async (req, res) => {
    try {
      const { name,phone,email,msg,sub} = req.body;
      const services = new EmailCollection  ({
        name,phone,email,msg,sub
        
       
       

});
      await services.save();
      res.status(201).json({ message: ' created', services });
    } catch (err) {
      res.status(400).json({ message: 'Error creating', error: err.message });
    }
}

const view=async(req,res)=>{
    try{
        const response=await EmailCollection.find()
        res.status(201).send(response)
    }catch(err){
        res.status(500).send({message:"internal server error"})
    }
}

module.exports={
    create,
    view
    
}