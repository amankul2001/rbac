const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User  = require('../models/userModel');




const register = async (req , res) =>{

   try {
     const {username , password , role} = req.body;

   const hashPassword  = await bcrypt.hash(password, 10);

   const newUser = new User({username, pasword :hashPassword,role })

   await newUser.save();

   res.status(201).json({message: `User registered with username ${username}`});
   } catch (error) {
        res.status(500).json({message:"Somthing went wrong"});
   }


};


const login = async (req , res) =>{

   try {
     const {username , password} = req.body;

     const user = await User.findOne({username});

     if(!user){
            return res.status(404).json({message:`User witn username ${username} not found`})
     }


     const isMatch = await bcrypt.compare(password ,user.pasword);

     if(!isMatch){
        return res.status(400).json({message:`Invalid credentials`})
     }

     
     const token = jwt.sign({
        id:user._id, role:user.role
     }, process.env.JWT_SECRET, {expiresIn: "1h"})

     res.status(200).json({token:token})

   } catch (error) {

    console.log(error);
    
        res.status(500).json({message:"Somthing went wrong"});
   }



};


module.exports = {login , register}