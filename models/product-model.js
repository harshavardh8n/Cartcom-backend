const mongoose= require("mongoose");
const productSchema = new mongoose.Schema({
    id:{
        type: String,
        require:true,
    },
    name:{
        type: String,
        require: true,
    }
    ,
    company:{
        type:String,
        require: true,
    },
    price:{
        type: Number,
        require:true,

    },
    image:{
        type:String,
        require: true,
    },
    description:{
        type:String,
        require: true,
    },
    category:{
        type:String,
        require: true,
    },
    featured:{
        type:Boolean,
        require: true,
    },
});

const Product = new mongoose.model("Product",productSchema);

module.exports = Product;