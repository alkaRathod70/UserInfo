const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const Emplyoueemodules = require('./model/Employee');
const app=express()
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
app.use(cors())
app.use(express.json())


mongoose.connect('mongodb://127.0.0.1:27017/employee');


app.post("/register",(req,res)=>{
    //  const{password,email}=req.body
    //  bycript.hash(password,10,(hashedpassword)=>{
    //     if(err){
    //         res.status(500).json()
    //     }
    //  })
 

    const {name,email,password}=req.body;
    bcrypt.hash(password,10,(err,hashpassword)=>{
     if(err){
        res.json(500).json('internal server error')
     }   else{
Emplyoueemodules.create({name,email,password:hashpassword})
.then(employees => res.json(employees))
.catch(err => res.json(err));
     }
    });


    // Emplyoueemodules.create(req.body)
    // .then(employees => res.json(employees))
    // .catch(err => res.json(err));
    
})


// app.post('/login', (req, res) =>{
//     const { email, password } = req.body;

//     Emplyoueemodules.findOne({ email: email})
//     .then(user => {


//     bycript.compare(password,user.password,(err,isMatch)=>{
//  if(err){
//     res.status(500).json('internal server error')
// }
// else if(isMatch){
// const token=jwt.sign({userId:user._id,email:user.email},'myserach@key');
// res.json({token});
// } else{
//     res.status(401).json('password id incorrect')
// }
//     });
 
//       else{
//         res .status(404).json('No record found')
//     }
// });
// .catch(err=>res.status(500).json('internal server error'));
// });

app.post('/login', (req, res) => {
    const { email, password} = req.body;

    Emplyoueemodules.findOne({email: email})
    .then(user => {
        if (user) {
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) {
                    res.status(500).json('Internal server error');
                } else if (isMatch) {
                    const token = jwt.sign({ userId: user._id, email: user.email}, 'alkasecrea@key');
                    res.json({token});
                } else {
                    res.status(401).json('Password is incrrect');
                }
            });
        } else {
            res.status(404).json('No record found');
        }
    })
    .catch(err => res.status(500).json('Internal Server error'));
});

app.get('/', (req, res) => {
    res.send('Hello Alka!..')
})

app.listen(8080, () => {
    console.log('Server is running on port 8080');
})


//         if (user) {
//             if (user.password === password) {
//                 res.json('Success');
//             } else {
//                 res.json('Password is icorrect');
//             }

//         } else {
            
//    }}) })
