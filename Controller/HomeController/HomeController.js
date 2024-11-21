const HomeCollection = require("../../Models/HomePageModel/HomeModel")

const create=async (req, res) => {
    try {
      const { title,  content, description, banner, image,images } = req.body;
      const home = new HomeCollection  ({
        title,
        content,
        description,
        banner,
        image,
        images
        
       
      });
      await home.save();
      res.status(201).json({ message: ' created', home });
    } catch (err) {
      res.status(400).json({ message: 'Error creating ', error: err.message });
    }
}

const view=async(req,res)=>{
    try{
        const response=await HomeCollection.find()
        res.status(201).send(response)
    }catch(err){
        res.status(500).send({message:"internal server error"})
    }
}
const gethome=async(req,res)=>{
  try{
      const {id}=req.params
      const getproducts=await HomeCollection.findById(id)
      res.status(201).send(getproducts)
  }catch(err){
      res.status(500).send({message:"internal server error"})
  }
}

const update=async (req, res) => {
  try {
    const { id } = req.params; 
    const body = req.body; 

    const product = await HomeCollection.findById(id); 

    if (!product) {
      return res.status(400).send("Oops, job not found.");
    }

  
    const updatedProduct = await HomeCollection.findByIdAndUpdate(
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
    update,gethome
}