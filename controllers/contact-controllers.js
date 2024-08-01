const Contact = require("../models/contact-model.js")

const contact = async(req,res)=>{
    try {
        // console.log(req.body);
        const {email,message}=req.body;
        console.log({email,message});
        await Contact.create({email,message})
        console.log(req.body);
        res.json({mssg:"jaa rha hai"});
        
    } catch (error) {
      console.log(error);  
    }
}

module.exports = { contact};