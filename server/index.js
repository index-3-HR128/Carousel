const express = require('express')
const path = require('path')
const axios = require('axios')
const app = express()
const port = 3003

//init database
const db = require('../database/index.js')
const Places = require('../database/Place.js')
const Users = require('../database/User.js')

// app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static(path.join(__dirname,'..','client','dist')))

//get request on places
app.get('/api/places', function(req,res){
  console.log('in server GET Places loop');
  Places.find()
    .then((data) => {
      console.log("sending get Places data to client")
      res.send(data);
    })
    .catch((e) =>{
      console.log("error in get request: "+ err)
    })
})

//get request on places
app.get('/api/users', function(req,res){
  console.log('in server GET user loop');
  Users.find()
    .then((data) => {
      console.log("sending get User data to client")
      res.send(data);
    })
    .catch((e) =>{
      console.log("error in get request: "+ err)
    })
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))