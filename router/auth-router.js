const express = require("express");
const router = express.Router();
const Contact = require("../models/User-models")
const {Home,register,login} = require("../controllers/auth-controllers")

const {getProduct}  = require("../controllers/contact-controllers")


router.route("/").get(Home);

router.route("/getuser").get(async(req,res)=>{
    const contact = await Contact.find();
    res.json(contact);
}); 

router.route("/register").post(register);

router.route("/login").get(login);
router.route("/login").post(login);






module.exports = router;