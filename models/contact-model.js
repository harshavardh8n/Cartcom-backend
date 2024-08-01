const mongoose= require("mongoose");
const contactSchema = new mongoose.Schema({
    
    email:{
        type:String,
        require: true,
    },
    message:{
        type:String,
        require:true,

    }
});

const Contact = new mongoose.model("Contact",contactSchema);

module.exports = Contact;