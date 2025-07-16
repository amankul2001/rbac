const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

// middleware 
app.use(express.json());

// routes


app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
    
})
