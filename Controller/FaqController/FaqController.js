const FaqCollection = require("../../Models/FaqPageModel/FaqModel")
const create=async (req, res) => {
    try {
      const { Faqtitle,Faqanswer,} = req.body;
      const services = new FaqCollection  ({
        Faqtitle,
        Faqanswer,
        
       
       

});
      await services.save();
      res.status(201).json({ message: ' created', services });
    } catch (err) {
      res.status(400).json({ message: 'Error creating ', error: err.message });
    }
}

const view=async(req,res)=>{
    try{
        const response=await FaqCollection.find()
        res.status(201).send(response)
    }catch(err){
        res.status(500).send({message:"internal server error"})
    }
}
const get=async(req,res)=>{
  try{
      const {id}=req.params
      const getproducts=await FaqCollection.findById(id)
      res.status(201).send(getproducts)
  }catch(err){
      res.status(500).send({message:"internal server error"})
  }
}
const update=async (req, res) => {
  try {
    const { id } = req.params; 
    const body = req.body; 

    const product = await FaqCollection.findById(id); 

    if (!product) {
      return res.status(400).send("Oops, not found.");
    }

 
    const updatedProduct = await FaqCollection.findByIdAndUpdate(
      { _id: id },
      body,
      { new: true, runValidators: true } 
    );

    return res.status(200).send({
      success: true,
      message: "updated successfully!",
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