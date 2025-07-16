const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL;
 const db  =mongoose.connect(MONGO_URL)
.then((res)=> console.log("database connected successfully"))
.catch((error)=> console.log("database connection error"))


module.exports = db;