'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { PORT, CLIENT_ORIGIN } = require('./config');
const { dbConnect } = require('./db-mongoose');
// const {dbConnect} = require('./db-knex');

let cats = [
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Hopper',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  },
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Ripley',
    sex: 'Male',
    age: 1,
    breed: 'Calico',
    story: 'Clawed owner in the face'
  },
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Aegean cat with black stripes lounging on concrete.',
    name: 'Duffy',
    sex: 'Female',
    age: 5,
    breed: 'Aegean',
    story: 'Drank too much milk'
  }
];
cats = cats.sort((a, b) => a.age < b.age);

let dogs = [
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 1,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  },
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Watson',
    sex: 'Male',
    age: 3,
    breed: 'Rottweiler',
    story: 'Too alpha for other dogs'
  },
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Athena',
    sex: 'Female',
    age: 10,
    breed: 'Poodle',
    story: 'Decided to be more independent'
  }
];
dogs = dogs.sort((a, b) => a.age < b.age);

const app = express();

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

// Cat Routes
app.get('/api/cat', (req, res, next) => {
  const cat = cats[0];
  res.json(cat);
});

app.delete('/api/cat', (req, res, next) => {
  const tryDelete = async () => {
    try {
      const cat = await cats.shift();
      console.log(`${cat} was adopted!`);
      res.status(204).end();
    } catch (err) {
      return next(err);
    }
  }

  tryDelete();
});

// Dog Routes
app.get('/api/dog', (req, res, next) => {
  const dog = dogs[0];
  res.json(dog);
});

app.delete('/api/dog', (req, res, next) => {
  const tryDelete = async () => {
    try {
      const dog = await dogs.shift();
      console.log(`${dog} was adopted!`);
      res.status(204).json(dog).end();
    } catch (err) {
      return next(err);
    }
  }

  tryDelete();
});

function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

if (require.main === module) {
  dbConnect();
  runServer();
}

module.exports = { app };
