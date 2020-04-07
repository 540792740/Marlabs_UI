const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video');
const db = 'mongodb://localhost:27017/Employee';
mongoose.Promise = global.Promise;

//connection
mongoose.connect(db, function (err) {
  if(err){
    console.log("Error!:" + err);
  }
});


router.get('/', function (req, res) {
  res.send('api works');
});

router.get('/videos/:id', function (req, res) {
  console.log("Get request for all videos");
  Video.findById(req.params.id)
    .exec(function (err, result) {
      if(err) {
        console.log("Error retrieving Videos")
      }else{
        res.json(result);
      }
    });
});

router.get('/videos', function (req, res) {
  console.log("Get request for all videos");
  Video.find({})
    .exec(function (err, result) {
      if(err) {
        console.log("Error retrieving Videos")
      }else{
        res.json(result);
      }
    });
});

router.post('/videos', function (req, res) {
  console.log("Post a video");
  var newVideo = new Video();
  newVideo.title = req.body.title;
  newVideo.url  = req.body.url;
  newVideo.description = req.body.description;

  newVideo.save(function (err, insertedVideo) {
    if(err){
        console.log("Error Saving Video")
    }else{
      res.json(insertedVideo);
    }
  });


});
//https://www.youtube.com/watch?v=RWMKGAzuszM

module.exports = router;
