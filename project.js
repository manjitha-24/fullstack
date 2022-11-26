const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore} = require('firebase-admin/firestore');

var serviceAccount = require("./key.json");


initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

var express = require('express')  
var app = express()  


app.set('view engine', 'ejs');



app.get('/', function (req, res) {  
    var a = {name:"manjitha reddy",age:19};
    res.render("dashboard",{data : a});  
    }) ; 




  
app.get('/home', function (req, res) {  
res.sendFile(__dirname+'/home.html');  
}) ; 

app.get('/login', function (req, res) {  
    res.sendFile(__dirname+'/login.html');  
    }) ; 

app.get('/signup', function (req, res) {  
        res.sendFile(__dirname+'/signup.html');  
        }) ; 

app.get('/signupsubmit', function (req, res) {  
           // res.sendFile(__dirname+'/signup.html');
            console.log(req.query.email);
            console.log(req.query.mobile);
            db.collection('users').add({
                email: req.query.email,
                mobile: req.query.mobile,
            }).then(()=>{
                res.send("signup succesfully");
            });
            
            }); 
    
            app.get('/loginsubmit', function (req, res) {  
                db.collection('users').where("email","==",req.query.email).where("mobile","==",req.query.mobile); 
                if(docs.length>0){
                    res.send("login succesfull");
                }
                else{
                    res.send("login unsuccesfull");
                }
                }) ;  
app.listen(3000, function () {  
console.log('Example app listening on port 3000!')  
})