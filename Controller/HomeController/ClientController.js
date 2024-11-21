const ClientCollection = require("../../Models/HomePageModel/ClientsModel")
const create=async (req, res) => {
    try {
      const { logo1,  logo2, logo3, logo4,logo5,logo6 } = req.body;
      const Client = new ClientCollection  ({
        logo1,
        logo2,
        logo3,
        logo4,
        logo5,
        logo6
        
        
        
       
      });
      await Client.save();
      res.status(201).json({ message: ' created', Client });
    } catch (err) {
      res.status(400).json({ message: 'Error creating ', error: err.message });
    }
}

const view=async(req,res)=>{
    try{
        const response=await ClientCollection.find()
        res.status(201).send(response)
    }catch(err){
        res.status(500).send({message:"internal server error"})
    }
}
const getclient=async(req,res)=>{
  try{
      const {id}=req.params
      const getproducts=await ClientCollection.findById(id)
      res.status(201).send(getproducts)
  }catch(err){
      res.status(500).send({message:"internal server error"})
  }
}

const update=async (req, res) => {
  try {
    const { id } = req.params; 
    const body = req.body; 

    const product = await ClientCollection.findById(id); 

    if (!product) {
      return res.status(400).send("Oops, job not found.");
    }

  
    const updatedProduct = await ClientCollection.findByIdAndUpdate(
      { _id: id },
      body,
      { new: true, runValidators: true } 
    );

    return res.status(200).send({
      success: true,
      message: " updated successfully!",
      updatedProduct,
    });
  } catch (err) {
    return res.status(500).send("Internal server error");
  }
};
module.exports={
    create,
    view,
    update,
    getclient
}