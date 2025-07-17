const express = require('express');
const verifyToken = require('../middleware/authMiddleware');
const router = express.Router();


router.get('/admin', verifyToken, (req , res)=>{
        res.json({message:"Welcome Admin"})
});

router.get('/manager', (req , res)=>{
        res.json({message:"Welcome Manager"})
});

router.get('/user', (req , res)=>{
        res.json({message:"Welcome User"})
});

module.exports = router;