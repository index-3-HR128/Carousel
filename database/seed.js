const db = require('./index.js');
const Place = require('./Place.js');
const User = require('./User.js');

const sampleUser = [
  {
    name: "abc",
    list: [{name: "newlist1"}, {name:"new List 2"}, {name: "New List 3"}],
    likeplace: [{ name:"Forest House - Volcano Rainforest Retreat", list: "newlist1"}]
  }
]

const samplePlaces = [
  {
    picture: 'http://google.com',
    type: 'Enire house',
    bed: '1 bed',
    rating: 4.81,
    totalReview: 36,
    hostplus: false,
    superhost: true,
    title: 'The Garden Lost ~Newly Remodeled',
    price: 129,
    src: "https://www.airbnb.com/rooms/5825468"
  },
  {
    picture: 'http://google.com',
    type: 'Private Room',
    bed: '1 bed',
    rating: 3.75,
    totalReview: 4,
    hostplus: false,
    superhost: false,
    title: 'Concha Del Mar at Pleasure Point',
    price: 263,
    src: "http://youtube.com"
  },
  {
    picture: 'http://google.com',
    type: 'Private Room',
    bed: '1 bed',
    rating: 4.81,
    totalReview: 186,
    hostplus: false,
    superhost: false,
    title: 'Charming Private Room',
    price: 125,
    src: "http://youtube.com"
  },
  {
    picture: 'http://google.com',
    type: 'Entire house',
    bed: '1 bed',
    hostplus: false,
    superhost: false,
    title: 'Barefoot Bungalow',
    price: 300,
    src: "http://youtube.com"
  }
];

const insertSamplePlaces = () => {
  // for(let i=0;i<samplePlaces.length;i++){
  //   let places = new Place(samplePlaces[i]);
  //   places.save()
  // };
  Place.create(samplePlaces)
  .then( ()=> User.create(sampleUser))
  .then( ()=> console.log("completed importing sample data"))
  .catch((e) => console.log("error: "+ err))
};


insertSamplePlaces()

