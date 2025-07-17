const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./config/db')
const PORT = process.env.PORT;
const authRoute = require('./routes/authRoutes')
const userRoute = require('./routes/userRoutes')

// middleware 
app.use(express.json());

// routes
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);




app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
    
})
