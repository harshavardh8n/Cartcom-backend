const Product = require("../models/product-model.js")

const product = async(req,res)=>{
    try {
        // co1nsole.log(req.body);
        const {id,name,company,price,image,description,category,featured}=req.body;
        console.log({id,name,company,price,image,description,category,featured});
        await Product.create({id,name,company,price,image,description,category,featured})
        console.log(req.body);
        res.json({mssg:"jaa rha hai"});
        
    } catch (error) {
      console.log(error);  
    }
}

module.exports = {product};