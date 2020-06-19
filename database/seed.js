const db = require('./index.js');
const Place = require('./Place.js');
const User = require('./User.js');
const axios = require('axios');
const faker = require('faker');
const apiKey = require('../config/unsplashdb.js')
const Promise = require('bluebird');

const sampleUser = () =>{
  return new Promise(function(resolve, reject){
    let users = [];
    for(var i=0;i<90;i++){
      let user = {};
      user.name = faker.name.findName()+ "";
      user.likeplace = [{
        name: "One bedroom Oahu",
        list: "VacationList",
        like: true
      }];
      users.push(user);
    }
    if( users != null){
      resolve(users)
    }else{
      reject(new Error('No data'))
    }
  })
}


const samplePlaces = (pageNumber, previousdata) => {
  pageNumber = pageNumber || 1;
  return axios.get('https://api.unsplash.com/search/photos',{
    params: {
      client_id: apiKey,
      query: "bedroom for rent",
      page: pageNumber,
      per_page: 30
    }
  })
    .then((res)=> {
      let result = previousdata || [];;
      let unsplashPhoto = res.data.results;
      for(let i=0;i<unsplashPhoto.length;i++){
        let tempObj = {};
        tempObj.picture = unsplashPhoto[i].urls.thumb;
        tempObj.type = 'One room';
        tempObj.bed = '1 bed';
        tempObj.rating = Math.random() * (5-2)+2;
        tempObj.totalReview = Math.random() * 100;
        tempObj.hostplus = Math.round(Math.random() * 1);
        tempObj.superhost = Math.round(Math.random() * 1);
        tempObj.title = 'Nice Room';
        tempObj.price = Math.random() * (300-100)+100;
        tempObj.src = "http://youtube.com";
        result.push(tempObj);
      }
      return result;
    })
    .catch((err) => {
      console.log("error: "+ err);
    })
}

const insertSamplePlaces = () => {
  Place.deleteMany()
  .then( () => samplePlaces(1, []))
  .then( (data) => samplePlaces(2,data))
  .then( (data) => samplePlaces(3,data))
  .then( (data)=>Place.create(data))
  .then( ()=> console.log("completed importing Places sample data"))
  .catch( (err) => console.log("error: "+ err))
  .then( () => User.deleteMany())
  .then( () => sampleUser())
  .then( (data) => User.create(data))
  .then( ()=> console.log("completed importing sample data"))
  .catch( (err) => console.log("error: "+ err))
};

 insertSamplePlaces()

