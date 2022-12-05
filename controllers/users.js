const fs=require("fs")

const registration=((req,res)=>{
    
let {name,email,mobno,gender,pass}=req.body;

if(fs.existsSync(`user/${email}.txt`)){

    res.render('register',{errmsg:"email already exist"})
}
else{
  fs.writeFile(`user/${email}.txt`,`${name}\n${email}\n${mobno}\n${gender}\n${pass}`,(err)=>{

        if(err){
            
        }
        else{
                  res.redirect('/welcome/'+email);        }
    })
}



})
const login = ((req, res) => {

    let { email1, pass1 } = req.body;

    if (fs.existsSync(`user/${email1}.txt`)) {

        var array = fs.readFileSync(`user/${email1}.txt`).toString().split("\n");

        if (array[4] === pass1) {

            res.redirect('/welcome2/'+email1);

        } else {

            res.render('login', { errmsg: "Enter correct password " })
        }
    } else {

        res.render('login', { errmsg1: "email not found " })
    }
})
module.exports={
    registration,login
}



