const express = require("express")
const cors = require("cors");
const router = require("./router/auth-router")
const crouter = require("./router/contact-router")
const dbconnect =require("./utils/db");
const prouter = require("./router/product-router");
const app = express();

// lets tackle cors

const corsoptions={
    origin:"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
};

app.use(cors(corsoptions));


app.use(express.json())

app.use("/api/auth",router);
app.use(crouter);
app.use(prouter);
// router.route()



const port =4000;
dbconnect().then(()=>{
    app.listen(port,()=>{
        console.log("server running on",port);
    })
})
