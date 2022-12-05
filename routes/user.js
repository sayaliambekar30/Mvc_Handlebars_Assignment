const express=require("express");
const router=express.Router();

// const{ login } = require('../controllers/users')
 
router.get('/',(req,res)=>{

    res.render('user')
})

// router.get('/login',(req,res)=>{

//     res.render('login')
// })

// router.get('/register',(req,res)=>{

//     res.render('register')
// })


// router.post('/postdata1',login);

module.exports=router;

