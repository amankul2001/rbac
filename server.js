const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./config/db')
const PORT = process.env.PORT;
const authRoute = require('./routes/authRoutes')

// middleware 
app.use(express.json());

// routes
app.use('/api/auth', authRoute)


app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
    
})
