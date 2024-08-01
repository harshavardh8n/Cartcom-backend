const Contact =require("../models/contact-model")
const {contact} = require("../controllers/contact-controllers")
const express = require("express")
const crouter = express.Router();

crouter.route("/contact").get(async(req,res)=>{
    const data = await Contact.find();
    res.json(data) 
});

crouter.route("/contact").post(contact);

module.exports = crouter;