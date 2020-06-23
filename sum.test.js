//Initial packages
const axios = require('axios');
const path = require('path');

const {sum,mul,sub,div} = require('./sum.js');
const PlaceController = require('./server/Controller/place.js')
const UserController = require('./server/Controller/user.js')

//address for User and Place
const port = 3003;

test('Test Place API GET request to respond 200', () => {
  axios.get(`http://localhost:${port}/api/places`)
  .then( (res)=>{
    console.log(res.status)
    expect(res.status).toBe(200);
    expect(res.statusText).toBe('OK');
  } )
  .catch((e)=>{
    console.log("error: "+ e);
  })
})

test('Test User API GET request to respond 200', () => {
  axios.get(`http://localhost:${port}/api/users`)
  .then( (res)=>{
    console.log(res.status)
    expect(res.status).toBe(200);
    expect(res.statusText).toBe('OK');
  } )
  .catch((e)=>{
    console.log("error: "+ e);
  })
})



// test('subtracting 10 - 5 to equal 5', ()=>{
//   expect(sub(10,5)).toBe(5);
// })

// test('dividing 4 / 2 to equal 2', ()=>{
//   expect(div(4,2)).toBe(2);
// })