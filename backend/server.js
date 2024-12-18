const express=require('express');
const mongoose=require('mongoose');
const app = express();
const jwt=require("jsonwebtoken");
const secretkey="secretkey";
const bcrypt=require("bcryptjs");
const cors = require('cors');
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/prefs").then(
    ()=>{
        console.log("Connected to MongoDB");
    }
).catch((err)=>{
    console.error("Error connecting to MongoDB",err);
})
const users = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true } // Remove `unique: true` here
  });
  

const usersdata=mongoose.model('users',users);
app.use(express.json());
const PORT=5000;
app.post("/auth/signup", async (req, res) => {
    const { name, email, password } = req.body;
    
    try {
      const exists = await usersdata.findOne({ email: email });
      if (exists) {
        return res.status(400).json({ message: `${name} already exists` }); // Ensure we return here to stop execution
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create new user
      const newuser = new usersdata({ name, email, password: hashedPassword });
      await newuser.save();
  
      return res.status(201).json({ message: `User ${name} registered successfully` }); // Return after sending the response
    } catch (err) {
      return res.status(500).json({ message: "Error registering user", error: err });
    }
  });
  
const verifyuser=(req,res,next)=>{
    const token=req.headers.authorization;
    if(!token){
        res.status(401).json({message:"Access denied"})
    }
    try{
        const accesstoken=token.split(" ")[1];
        const decode=jwt.verify(accesstoken,secretkey);
        req.user=decode;
        next();
    }
    catch(err){
        res.status(403).json({message:"Invalid token"});
    }

}
app.get("/auth/protected",verifyuser,(req,res)=>{
    res.status(200).json({message:`Hello ${req.user.email} ,you accessed a protected route`})
})
app.post("/auth/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await usersdata.findOne({ email: email });
      if (!user) {
        // If no user is found, respond with an error
        return res.status(404).json({ message: `User ${email} not found` });
      }
  
      const ispasswordvalid = await bcrypt.compare(password, user.password);
      if (!ispasswordvalid) {
        // If password is incorrect, respond with an error
        return res.status(401).json({ message: "Invalid password" });
      }
  
      // Generate JWT token if login is successful
      const accesstoken = jwt.sign(
        { email: user.email, id: user._id },
        secretkey,
        { expiresIn: "1h" }
      );
  
      res.status(200).json({
        message: "Login successful",
        token: accesstoken,
        user: {
          name: user.name,
          email: user.email
        }
      });
    } catch (err) {
      console.error("Error during login:", err);
      res.status(500).json({ message: "Internal Server Error", error: err });
    }
  });
  
app.get("/auth/view",verifyuser,async(req,res)=>{
    try{
    const  user=await usersdata.find({});
    
    if(user.length==0){
        return res.status(404).json({message:"No users found"});
        //if no users found return and stop further execution.
    }
        //show all users data
        return res.status(200).json(user);
    }
    catch(err){
        return res.status(404).json({message:"No users found"});
    }
})
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})