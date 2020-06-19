const express = require('express')
const path = require('path')
const axios = require('axios')
const app = express()
const port = 3003

//init database
const db = require('../database/index.js')
const Place = require('../database/Place.js')
const User = require('../database/User.js')

//init parser
const parser = require('body-parser')
app.use(parser.json());

//init morgan
const morgan = require('morgan')
app.use(morgan('dev'));

// app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static(path.join(__dirname,'..','client','dist')))

//get request on places
app.get('/api/places', function(req,res){
  console.log('in server GET Places loop');
  Place.find()
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
  User.find()
    .then((data) => {
      res.send(data);
    })
    .catch((e) =>{
      console.log("error in get request: "+ err)
    })
})

// post request on places
app.post('/api/users', function(req,res){
  console.log('in server POST user loop');
  let userid = req.body._id;
  let listName = req.body.list;
  let newlikeplace = {
    "name": req.body.likeplace,
    "list": listName
  }
  console.log(newlikeplace);
  User.findByIdAndUpdate(
    { _id: userid},
    // { $push: {"list": listName}},
    { $push: {"likeplace": newlikeplace}}
  )
  .then(() => res.sendStatus(202))
  .catch((e)=> res.sendStatus(404))


})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))