const express = require('express');
const verifyToken = require('../middleware/authMiddleware');
const authorizeRoles = require('../middleware/roleMiddleware');
const router = express.Router();


router.get('/admin', verifyToken, authorizeRoles("admin"),(req , res)=>{
        res.json({message:"Welcome Admin"})
});

router.get('/manager', verifyToken ,authorizeRoles("admin","manager"), (req , res)=>{
        res.json({message:"Welcome Manager"})
});

router.get('/user',verifyToken,authorizeRoles("admin","manager","user") ,(req , res)=>{
        res.json({message:"Welcome User"})
});

module.exports = router;