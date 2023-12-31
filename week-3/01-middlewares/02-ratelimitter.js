const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

/*
  so make a functionality that uses setinterval and after every second, it deletes the numberOfRequestsForUser container
  another functionalty would be made for checking out the number of response per user, and it blocks them with 404 once it recievess 6th request in a second
*/

// ACed -> chatgpt told me to modify the numberOfRequestsForUser to [] (earlier it was an {})
// also req.get('') was enough

/**
 * so object one that was given works like a map, so it was also correct though
 */

let numberOfRequestsForUser = {};
setInterval(() => {
  numberOfRequestsForUser = {};
}, 1000)

app.use(requestLimiter);

function requestLimiter(req, res, next) {
  const user = req.headers['user-id'];
  if (numberOfRequestsForUser[user]) {
    if (numberOfRequestsForUser[user] === 5) {
      return res.status(404).send("you are not allowed to enter this");
    }
    numberOfRequestsForUser[user] += 1;
  }
  else {
    numberOfRequestsForUser[user] = 1;
  }
  next();
}


// let numberOfRequestsForUser = [];
// setInterval(() => {
//   numberOfRequestsForUser = [];
// }, 1000)

// app.use(requestLimiter);

// function requestLimiter(req, res, next){
//   let obj = numberOfRequestsForUser.find(obj => obj['user-id'] === req.get('user-id'));

//   if(!obj){
//     numberOfRequestsForUser.push({
//       "user-id": req.get('user-id'),
//       "count": 1
//     });
//     res.sendStatus(200);
//   }
//   else if(obj.count == 5){
//     res.sendStatus(404);
//   }
//   else{
//     obj.count += 1;
//     res.sendStatus(200);
//   }

//   next();
// }


// let numberOfRequestsForUser = [];
// setInterval(() => {
//   numberOfRequestsForUser = [];
// }, 1000);

// app.use(requestLimiter);

// function requestLimiter(req, res, next) {
//   let user = numberOfRequestsForUser.find(obj => obj['user-id'] === req.get('user-id'));

//   if (!user) {
//     numberOfRequestsForUser.push({
//       "user-id": req.get('user-id'),
//       "count": 1
//     });
//     res.sendStatus(200);
//   } else if (user.count === 5) {
//     res.sendStatus(404);
//   } else {
//     user.count += 1;
//     res.sendStatus(200);
//   }

//   next();
// }

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;