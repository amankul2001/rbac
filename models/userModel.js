const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    pasword:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enun:["admin", "manager", "user"]
    }
},{
    timestamps:true
});

module.exports = mongoose.model("User", userSchema);