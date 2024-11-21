const WelcomeNoteSchemaCollection = require("../../Models/HomePageModel/WelcomNoteModel")

const create=async (req, res) => {
    try {
      const { title,  content, description, point1,point2,point3,point4 } = req.body;
      const home = new WelcomeNoteSchemaCollection  ({
        title,
        content,
        description,
        point1,
        point2,
        point3,
        point4
        
        
       
      });
      await home.save();
      res.status(201).json({ message: ' created', home });
    } catch (err) {
      res.status(400).json({ message: 'Error creating ', error: err.message });
    }
}

const view=async(req,res)=>{
    try{
        const response=await WelcomeNoteSchemaCollection.find()
        res.status(201).send(response)
    }catch(err){
        res.status(500).send({message:"internal server error"})
    }
}
const gethome=async(req,res)=>{
  try{
      const {id}=req.params
      const getproducts=await WelcomeNoteSchemaCollection.findById(id)
      res.status(201).send(getproducts)
  }catch(err){
      res.status(500).send({message:"internal server error"})
  }
}

const update=async (req, res) => {
  try {
    const { id } = req.params; 
    const body = req.body; 

    const product = await WelcomeNoteSchemaCollection.findById(id); 

    if (!product) {
      return res.status(400).send("Oops, job not found.");
    }

    // If the product exists, update it
    const updatedProduct = await WelcomeNoteSchemaCollection.findByIdAndUpdate(
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
    gethome
}