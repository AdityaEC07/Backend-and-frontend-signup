// let express = require('express')
// let bcrypt = require('bcrypt')
// let jwt = require('jsonwebtoken')
// let app= express()
// let mongoose = require('mongoose')
// // let User = require("./model/model")
// let cors = require('cros')
// app.use(express.json())
// app.use(cors())
// mongoose.connect( 'mongodb://127.0.0.1:27017/mydata').then(()=>
// {
//     console.log('chal rha h');
// }).catch(()=>
// {
//     console.log('kuch nhi chla');
// })

// app.get('/',(req,res)=>
// {
// res.send('hello')
// })
// let user = new User ({id:11,name:'Raju',lastName:'kumar',email:'fvygbh@gmail.com',passward:12121212})
// user.save()


// app.post(inup)
// app.post('/sinup', async(req,res)=>{
//     console.log(req.body);
//     let userData=req.body
//     let {email}= req.body;

//     let testuser = await User.findOne({email})
//     if(testuser){
//         res.send('user already present')
//     }else{
//         // res.send('empty')

//         userData.passward = await bcrypt.hash(userData.passward,15)
//          console.log(userData.passward);

//           let dbUser= new User({
//           name:userData.name,
//           lastName:userData.lastName,
//           email:userData.email,
//           passward:userData.passward
//         })

        
//         await dbUser.save()
//           res.send('hogya signup')
//     }
// })



// //login api

// app.post('/login',async(req,res)=>
// {
//     console.log(req.body);
//     let userInfo=req.body
//     let loginData = await User.findOne({email:userInfo.email})
//     if (!loginData) 
//         {

//             res.send('user nhi huaa')
        
//     }

//     else
//     {
       
//         // res.send ('koi mil gya')

//       let validPass  = await bcrypt.compare(userInfo.passward,loginData.passward)
//       if (!validPass) 
//         {
//             res.send('wrong passs')
        
//       }
//       else
//       {
//         // res.send('login')
//         let data = JSON.stringfy(loginData)
        
//         let token = jwt.sign(data,'SDFGHJKHGFDFGH')
//         console.log({token,loginData} );
//       }
//     }
// })






// app.use(express.json());

// app.get('/',(req,res)=>{
//     res.send('Welcome');
// });






// // SignUp API

// app.post('/signup', async (req,res)=>{
//     console.log(req.body);
//     let userData = req.body;
//     let {email} = req.body;
//     let user = await User.findOne({email});

//     if(user){

//         res.send('User already exists');
//     }
//     else{

//         userData.password = await bcrypt.hash(userData.password, 10)
//         console.log(userData.password);

//         let dbUser = new User ({
//             "firstName": userData.name,
//             lastName: userData.lastName,
//             email: userData.email,
//             passward:  userData.passward,
//         });

//         await dbUser.save();
//         res.send('User created successfully');
//     }

//     res.send('Createddddddd');
// });






// LogIn API

// app.post('/login', async (req,res)=>{
//     console.log(req.body);
//     let userInfo = req.body;

//     let loginData = await User.findOne({email: userInfo.email})
//     if(!loginData){
//         res.send('User nahi mila hai');
//     }

    
//     else{
//         // res.send("User mil gya hai");

//         let validPassword = await bcrypt.compare(userInfo.password, loginData.password);
//         if(!validPassword){
//             res.send('Passward is incorrect');
//         } 
//         else{

//         // Generate Token 

//         let data = JSON.stringify(loginData);
//         let token = jwt.sign(data, 'ASDFGHJKL')
//         console.log(token, "Token generated");
        
//         // res.send('Logged in successfully');
//             res.send({token, loginData});
//         }
//     }
// });

// app.listen(5000,()=>
// {
//     console.log('5000 is work ');
// })


// let express=   require('express')
// let mongoose=   require('mongoose')
// let User=require('./mode/mode')
// let bcrypt=   require('bcrypt')
// let jwt=require('jsonwebtoken')
// mongoose.connect('  mongodb://127.0.0.1:27017/mydata').then(()=>{
//     console.log('chal gyaa');
// }).catch(()=>{
//     console.log('kuch to sahi nhi....');

// })

// let app=  express()
// app.use(express.json())

// app.get('/',(req,res)=>{
    
//     // res.send('ehhe')
// })

// app.post('/signup', async(req,res)=>{
//     console.log(req.body);
//     let userData=req.body
//     let {email}=req.body
//     let user=    await  User.findOne({email})
//      console.log(user);
//      if(user){
//         res.send('user jinda hai ')
//      }
//      else{
//           userData.passWord=    await  bcrypt.hash(userData.passWord,10)
//           console.log(userData.passWord);
//            let dbUser=  new User({
//             firstName:userData.firstName,
//             lastName:userData.lastName,
//             email:userData.email,
//             passWord:userData.passWord
//           })
   
   

//           await dbUser.save()
        
//           res.send('ho gyaa signupppp')


//         //   res.send('createdddd')
//      }


//     // res.send('hehe')


// })


// // login  api

//  app.post('/login', async(req,res)=>{
//     console.log(req.body);
//     let userInfo=req.body
//       let loginData=   await User.findOne({email:userInfo.email})
//       if(!loginData){
//         res.send('user nhi milaaaa ')
//       }
//       else{
//         // res.send('koi mil gyaa')
//         let validPass=    await  bcrypt.compare(userInfo.passWord,loginData.passWord)
//         if(!validPass){
//             res.send('invalid password')
//         }
//         else{
//             let data=JSON.stringify(loginData)
//             let   token=  jwt.sign(data,'JHSBFIWUGFWIGRFWIPGEU')
//             console.log(token,"toeknnn");
//             res.send({token,loginData})
//         }
//       }

//  })


// app.listen(5000,()=>{
//     console.log('serverrrr');
// })



let express = require('express')
let mongoosh = require('mongoose')
let User = require('./model/model')
let jwt = require('jsonwebtoken')
let cors = require('cors')
let bcrypt = require('bcrypt')
mongoosh.connect(' mongodb://127.0.0.1:27017//mydata').then(()=>{
    console.log("chal gya");
}).catch(()=>{
    console.log('nahi chalega');
})

let app = express();
app.use(cors())
app.use(express.json())
app.post('/signup',async(req,res)=>{
    console.log(req.body);
    let data = req.body
    let {email} = req.body
    let abhi =  await User.findOne({email});
    if(abhi){
        res.send('user exist')
    }
    else{

       data. password = await  bcrypt.hash(data. password,10)
    //    console.log(data.password);

       res.send('hiiiii')
       let user = new User({
        Firstname:data.Firstname,
        lastname:data.lastname,
        email:data.email,
        password:data.password
    })
    await user.save()
 }
})


app.post('/login', async(req,res)=>{
 let info = req.body;
 let loginData = await User.findOne({email:info.email});
 if(!loginData){
     res.send('user nahi mila')
 }
 else
 {
     // res.send('mill gya')
     let abhi = await bcrypt.compare(info.password,loginData.password);
     if(!abhi){
         res.send('pasword mismach')
     }
     else{
         let data = JSON.stringify(loginData)
         let token = jwt.sign(data,'bevfucdvxugherk')

         // res.send('login ho gya')
         res.send({token,loginData})
     }
 }
})


app.listen(5000,()=>{
    console.log("server 5000");
})