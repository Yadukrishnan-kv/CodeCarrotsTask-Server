const NewsCollection = require("../../Models/HomePageModel/NewsModel")
const create=async (req, res) => {
    try {
      const { title,content,newsimg1,newsdate,Newsimg1title,Newsimg1content
       
       } = req.body;
      const services = new NewsCollection  ({
        title,
        content,
        newsimg1,
        newsdate,
        Newsimg1title,
        Newsimg1content

});
      await services.save();
      res.status(201).json({ message: ' created', services });
    } catch (err) {
      res.status(400).json({ message: 'Error creating ', error: err.message });
    }
}

const view=async(req,res)=>{
    try{
        const response=await NewsCollection.find()
        res.status(201).send(response)
    }catch(err){
        res.status(500).send({message:"internal server error"})
    }
}
const get=async(req,res)=>{
  try{
      const {id}=req.params
      const getproducts=await NewsCollection.findById(id)
      res.status(201).send(getproducts)
  }catch(err){
      res.status(500).send({message:"internal server error"})
  }
}

const update=async (req, res) => {
  try {
    const { id } = req.params; 
    const body = req.body;

    const product = await NewsCollection.findById(id); 
    if (!product) {
      return res.status(400).send("Oops, job not found.");
    }

    
    const updatedProduct = await NewsCollection.findByIdAndUpdate(
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