const express = require("express")
const cors = require("cors");
// const router = require("./router/auth-router")
// const crouter = require("./router/contact-router")
const dbconnect =require("./utils/db");
const prouter = require("./router/product-router");
const app = express();

// lets tackle cors

app.use(cors());


app.use(express.json())


app.get("/product", (req,res)=>{
    res.send("products searching");
})


// app.use(router);
// app.use(crouter);
app.use(prouter);
// router.route()

app.get("/", (req,res)=>{
    res.send("Working");
})

const PORT =process.env.PORT || 4000;
dbconnect().then(()=>{
    app.listen(PORT,()=>{
        console.log("server running on",PORT);
    })
})
