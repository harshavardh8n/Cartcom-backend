const mongoose = require("mongoose");
const dotenv = require("dotenv")


dotenv.config();

const URI = process.env.MONGODB_CONNECION_URL

// const URI="mongodb://localhost:27017";

const dbconnect=async()=>{
    try {
        await mongoose.connect(URI);
        console.log("connection estalished")
    } catch (error) {
        console.log(error);
        process.exit(0);
    }

//    await mongoose.connect(URI);
}

module.exports = dbconnect;