const express=require("express");
const router=express.Router();

const{ registration }=require('../controllers/users')
const{ login } = require('../controllers/users')

router.get('/',(req,res)=>{

    res.render('index')
})
router.get('/login',(req,res)=>{

    res.render('login')
})
router.get('/register',(req,res)=>{

    res.render('register')
})
router.get('/welcome/:id',(req,res)=>{

    let email=req.params.id
    res.render('welcome',{email:email})
})

router.get('/welcome2/:id',(req,res)=>{

    let email=req.params.id
    res.render('welcome2',{email:email})
})

router.post('/postdata',registration);
router.post('/postdata1',login);

module.exports=router;

