const User = require("../models/User-models")
// var User = mongoose.model('../models/user-model')

const Home = async(req,res)=>{
    try {
        res.status(200).send("Welcome to Home  page");
        
    } catch (error) {
      console.log(error);  
    }
}

const register = async(req,res)=>{
    try {
        console.log(req.body);
        const {username,phone,email,password}=req.body;
        const userExists = await User.findOne({email:email})
        if(userExists){
            console.log("user already exists");
            return res.status(400).send({"mssg":"user already exists"})
            
        }
        console.log({username,phone,email,password});
        await User.create({username,phone,email,password})
        res.end();
        
    } catch (error) {
      console.log(error);  
    }
}

const login = async(req,res)=>{
        try {
    
            console.log(req.body);

            const {email,password}=req.body;
            const userExists = await User.findOne({email:email}) ///////await necessary!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            console.log({email,password});
            // if(userExists){
            //     return res.status(400).send({"mssg":"user already exists"})
            // }
            if(!userExists){
                return res.status(404).send("user doesnt exist")
            }
            if(password==userExists.password){
                console.log("Valid user");
                res.status(200).send({mssg:"valid user welcome"})
            }
            else{
                console.log("invalid credentials");
                res.status(400).send({mssg:"Invalid credentials"});
            }
            User.create({username,phone,email,password})
            
        } catch (error) {
          console.log(error);  
        }
}

const getProducts=(req,res)=>{


}

module.exports = { Home,register,login};