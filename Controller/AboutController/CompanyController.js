const CompanyCollection = require("../../Models/AboutPageModel/CompanyModel")
const create=async (req, res) => {
    try {
      const { title,content,companyimg1,description
       
       } = req.body;
      const services = new CompanyCollection  ({
        title,
        content,
        companyimg1,
        description
       

});
      await services.save();
      res.status(201).json({ message: ' created', services });
    } catch (err) {
      res.status(400).json({ message: 'Error creating ', error: err.message });
    }
}

const view=async(req,res)=>{
    try{
        const response=await CompanyCollection.find()
        res.status(201).send(response)
    }catch(err){
        res.status(500).send({message:"internal server error"})
    }
}
const get=async(req,res)=>{
  try{
      const {id}=req.params
      const getproducts=await CompanyCollection.findById(id)
      res.status(201).send(getproducts)
  }catch(err){
      res.status(500).send({message:"internal server error"})
  }
}
// update  products details
const update=async (req, res) => {
  try {
    const { id } = req.params; // Get the ID from the URL
    const body = req.body; // Get the body of the request

    const product = await CompanyCollection.findById(id); // Find  by ID

    if (!product) {
      return res.status(400).send("Oops,  not found.");
    }

    // If  exists, update it
    const updatedProduct = await CompanyCollection.findByIdAndUpdate(
      { _id: id },
      body,
      { new: true, runValidators: true } // Ensure validators run on the updated 
    );

    return res.status(200).send({
      success: true,
      message: "Job updated successfully!",
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