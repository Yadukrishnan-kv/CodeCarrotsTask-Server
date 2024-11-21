const ContactCollection = require("../../Models/ContactUsModel/ContactUsModel")
const create=async (req, res) => {
    try {
      const { place,Street,mobileno,opens,Satsun,email} = req.body;
      const services = new ContactCollection  ({
        place,
        Street,mobileno,opens,Satsun,email
        
       
       

});
      await services.save();
      res.status(201).json({ message: ' created', services });
    } catch (err) {
      res.status(400).json({ message: 'Error creating ', error: err.message });
    }
}

const view=async(req,res)=>{
    try{
        const response=await ContactCollection.find()
        res.status(201).send(response)
    }catch(err){
        res.status(500).send({message:"internal server error"})
    }
}
const get=async(req,res)=>{
  try{
      const {id}=req.params
      const getproducts=await ContactCollection.findById(id)
      res.status(201).send(getproducts)
  }catch(err){
      res.status(500).send({message:"internal server error"})
  }
}

const update=async (req, res) => {
  try {
    const { id } = req.params; 
    const body = req.body; 

    const product = await ContactCollection.findById(id); 

    if (!product) {
      return res.status(400).send("Oops, not found.");
    }


    const updatedProduct = await ContactCollection.findByIdAndUpdate(
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
    get
}