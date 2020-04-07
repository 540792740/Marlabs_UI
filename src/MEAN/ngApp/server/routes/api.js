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

// Find specific items by id
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

//Find all data
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

//Post data
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

//Updating data
router.put('/videos/:id', function (req, res) {
  console.log("Updating a video");

  Video.findByIdAndUpdate(req.params.id,{
      $set:{title:req.body.title, url:req.body.url, description:req.body.description}
    },
    {
      new:true
    },
    function(err, updatedVideo){
      if(err){
        req.send("Error updating Video")
      }else{
        res.json(updatedVideo);
      }
    }
  );
});

router.delete('/videos/:id', function (req, res) {
  console.log("Delete a video");

  Video.findByIdAndRemove(req.params.id, function (err, deletedVideo) {
    if (err) {
      req.send("Error updating Video")
    } else {
      res.json(deletedVideo);
    }
  });
});


module.exports = router;
