const express = require ('express')
const mongoose = require('mongoose')
const User = require('./model')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

const url ="mongodb+srv://nivethasree:nivitodo@cluster0.xenzfqb.mongodb.net/todo?retryWrites=true&w=majority"
const secretkey = "kjasbkwkuiodoqaxklips/PKN"

mongoose.connect(url).then(res=>{
    app.listen(4000,()=> {
      console.log("port 4000 running..")
  })
}).catch((err)=>{
    console.log(err)
})

app.get('/',(req,res)=>{
  const {authtoken} = req.body;
  console.log({authtoken})
  const verified= jwt.verify(authtoken,secretkey)
  if(verified){
    User.find().then(rslt => res.send(rslt))
    .catch(err => console.log(err))
  }
})

app.post('/login',(req,res)=>{
  const {email,password} = req.body;
  User.findOne({email}).then(user => {
    if(user){
      bcrypt.compare(password,user.password)
      .then(rlt =>{
        if(rlt){
          const token = jwt.sign({_id:user._id},secretkey)
          res.send({token})
        }
        else{
          console.log("user not found")
        }
      })

    }
  })

})

app.post('/signup',(req,res)=>{
  const{username,email,password} = req.body;
  bcrypt.genSalt(10).then(salt => bcrypt.hash(password,salt)
  .then(hashed => {const user = new User({username,email,password:hashed})
  user.save().then(rel => res.send(rel))
  .catch(err => console.log(err))}))
})

