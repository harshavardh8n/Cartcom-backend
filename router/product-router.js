const Product =require("../models/product-model")
const {product} = require("../controllers/product-controllers")
const express = require("express")
const prouter = express.Router();

prouter.route("/Products").get(async(req,res)=>{
    try {
        const productsdata = await Product.find();
        if(!productsdata){
            res.status(400).json({msg: "No product"})
            return;
        }
        res.status(200).json({msg:productsdata})
        // res.status(200).send({productsdata})
        res.end()
        

    } catch (error) {
        console.log("error in fetching",error);
    }
    
})

prouter.route("/Products").post(product);

module.exports = prouter;