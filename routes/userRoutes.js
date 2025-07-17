const express = require('express');
const router = express.Router();


router.get('/admin', (req , res)=>{
        res.json({message:"Welcome Admin"})
});

router.get('/manager', (req , res)=>{
        res.json({message:"Welcome Admin"})
});

router.get('/user', (req , res)=>{
        res.json({message:"Welcome Admin"})
});

module.exports = router;